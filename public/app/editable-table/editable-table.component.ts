import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {TableRow} from '../shared/util/table-row';

import {EditableTableService} from './editable-table.service';

@Component({
    selector: 'nv-editable-table',
    templateUrl: './editable-table.component.html',
    styleUrls: ['./editable-table.component.css'],
    providers: [EditableTableService]
})
export class EditableTableComponent implements OnInit {

    @Input('table-headers') tableHeaders: string[] = [];
    @Input('table-rows') tableRows: any[][] = [];
    @Input('table-rows-with-id') tableRowsWithId: any[][] = [];
    @Input('can-delete-rows') canDeleteRows = true;
    @Input('can-edit-rows') canEditRows = true;
    @Input('can-add-rows') canAddRows = true;
    @Input('hide-extra-button') hideExtraButton = false;

    @Input('add-button-label') addButtonLabel: string;
    @Input('extra-button-label') extraButtonLabel: string;
    @Input('edit-button-label') editButtonLabel: string;
    @Input('save-button-label') saveButtonLabel: string;
    @Input('cancel-button-label') cancelButtonLabel: string;
    @Input('delete-button-label') deleteButtonLabel: string;

    @Input('add-icon') addIcon = 'fa fa-plus';
    @Input('edit-icon') editIcon = 'fa fa-pencil-square-o';
    @Input('save-icon') saveIcon = 'fa fa-check';
    @Input('delete-icon') deleteIcon = 'fa fa-times';

    @Input('add-button-class') addButtonClass: string;
    @Input('edit-button-class') editButtonClass: string;
    @Input('delete-button-class') deleteButtonClass: string;

    @Input('tr-class') trClass: string;
    @Input('td-class') tdClass: string;
    @Input('buttons-td-class') buttonsTdClass: string;
    @Input('class') class: string;
    @Input('data-type') dataType = [];
    @Input('is-editable') isEditable = [];

    @Input() errorClass = 'myerror';
    @Input() isRequired = true;
    @Input() requiredMessage = 'Required';

    @Output() onSave = new EventEmitter<any>();
    @Output() onRemove = new EventEmitter<any>();
    @Output() onExtraButtonClick = new EventEmitter<any>();

    service: EditableTableService;

    constructor(service: EditableTableService) {
        this.service = service;
    }

    ngOnInit() {
        if (this.tableRows.length > 0 || (this.tableRows !== undefined && this.tableRowsWithId.length === 0)) {
            this.service.createTable(this.tableHeaders, this.tableRows, this.dataType, this.isEditable);
        } else if (this.tableRowsWithId.length > 0 || (this.tableRowsWithId !== undefined && this.tableRows.length === 0)) {
            this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType, this.isEditable);
        }
    }

    addRow() {
        this.service.addRow();
    }

    editRow(selectedRow: TableRow) {
        this.service.editRow(selectedRow);
    }

    cancelEdition(selectedRow: TableRow) {
        this.service.cancelEdition(selectedRow);
    }

    saveRow(selectedRow: TableRow) {
        for (const cell of selectedRow.cells) {
            if ((cell.content == null || cell.content === '') && this.isRequired && cell.isEditable) {
                return;
            }
        }
        this.service.saveRow(selectedRow);
        const dir = [];

        for (let i = 0; i < selectedRow.cells.length; i++) {
            dir.push(selectedRow.cells[i].content);
        }
        const obj = {id: selectedRow.id, cells: dir};

        this.onSave.emit(obj);
    }

    deleteRow(selectedRow: TableRow) {
        if (confirm("Are you sure you want to delete this?")) {
            this.service.deleteRow(selectedRow);
            const dir = [];

            for (let i = 0; i < selectedRow.cells.length; i++) {
                dir.push(selectedRow.cells[i].content);
            }
            const obj = {id: selectedRow.id, cells: dir};

            this.onRemove.emit(obj);
        }
    }

    extraButtonClick(selectedRow: TableRow){
        this.onExtraButtonClick.emit(selectedRow.id);
    }
}