import {Injectable} from '@angular/core';

import {TableRow} from '../shared/util/table-row';
import {TableCell} from '../shared/util/table-cell';

@Injectable()
export class EditableTableService {

    tableHeadersObjects: TableCell[] = [];
    tableRowsObjects: TableRow[] = [];
    isEditable = [];
    dataType = [];

    isEditing: TableRow[] = [];

    constructor() {
    }

    createTable(headers, content, dataType, isEditable) {

        this.createHeaders(headers, dataType, isEditable);

        let tableCells: TableCell[] = [];

        if (content.length > 0) {
            for (const row of content) {
                var i = 0;
                for (const cell of row) {
                    tableCells.push(
                        new TableCell(cell, isEditable[i]),
                    );
                    i++;
                }
                this.tableRowsObjects.push(new TableRow(tableCells));
                tableCells = [];
            }
        }
    }

    createTableWithIds(headers, content, dataType, isEditable) {

        this.createHeaders(headers, dataType, isEditable);

        let tableCells: TableCell[] = [];

        if (content.length > 0) {
            for (const row of content) {
                var j = 0;
                for (let i = 1; i < row.length; i++) {
                    tableCells.push(
                        new TableCell(row[i], isEditable[j]),
                    );
                    j++;
                }
                this.tableRowsObjects.push(new TableRow(tableCells, row[0]));
                tableCells = [];
            }
        }
    }

    addRow() {
        const newCells: TableCell[] = [];
        let newRow: TableRow;
        for (let i = 0; i < this.tableHeadersObjects.length; i++) {
            switch (this.dataType[i]) {
                case 'boolean':
                    newCells.push(new TableCell(false, this.isEditable[i]));
                    break;
                default:
                    newCells.push(new TableCell('', this.isEditable[i]));
            }
        }
        this.tableRowsObjects.push(
            newRow = new TableRow(newCells, -1)
        );

        this.isEditing.push(newRow);
    }

    editRow(selectedRow: TableRow) {
        this.isEditing.push(selectedRow);
    }

    saveRow(selectedRow: TableRow) {
        this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
    }

    cancelEdition(selectedRow: TableRow) {
        this.tableRowsObjects = this.tableRowsObjects.filter(temporalRow => temporalRow !== selectedRow);
        this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
        for (const cell of selectedRow.cells) {
            if (cell.content == null || cell.content === '') {
                this.tableRowsObjects = this.tableRowsObjects.filter(err => err !== selectedRow);
            } else if (selectedRow.id === -1) {
                this.tableRowsObjects = this.tableRowsObjects.filter(err => err !== selectedRow);
            }
        }
    }

    deleteRow(selectedRow: TableRow) {
        this.isEditing = this.isEditing.filter(temporalRow => temporalRow !== selectedRow);
        this.tableRowsObjects = this.tableRowsObjects.filter(temporalRow => temporalRow !== selectedRow);
    }

    checkTypeOf(value: any): string {
        if (typeof (value) === 'boolean') {
            return 'boolean';
        }

        return '';
    }

    private createHeaders(headers, dataType, isEditable) {

        var i = 0;
        for (const obj of headers) {
            this.tableHeadersObjects.push(
                new TableCell(obj, isEditable[i])
            );

            i++;
        }

        this.dataType = dataType;
        this.isEditable = isEditable;
    }
}