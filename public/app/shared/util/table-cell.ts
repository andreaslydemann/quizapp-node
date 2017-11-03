export class TableCell {
    content: any;
    isEditable: boolean;

    constructor(content: any, isEditable?: boolean) {
        this.content = content;

        if(isEditable != undefined)
            this.isEditable = isEditable;
        else
            this.isEditable = true;
    }
}