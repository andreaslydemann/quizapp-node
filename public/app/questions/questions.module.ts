import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";
import {CommonModule} from '@angular/common';
import {MyQuestionsComponent} from "./my-questions/my-questions.component";
import {EditableTableModule} from '../editable-table/editable-table.module';
import {QuestionService} from "./question.service";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        EditableTableModule
    ],
    declarations: [MyQuestionsComponent],
    providers: [QuestionService],
    exports: [MyQuestionsComponent],
})
export class QuestionsModule {
}
