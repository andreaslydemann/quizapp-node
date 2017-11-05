import {Component, Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import {QuestionService} from "../question.service";
import {Question} from "../../shared/models/question";

@Component({
    selector: 'my-questions',
    templateUrl: './my-questions.component.html',
    styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnChanges {
    @Input('quiz-id') quizId: number;
    @Output() onQuestionsUpdate = new EventEmitter<any>();

    questionLabel = " Question"
    dataType = ['string', 'string'];
    tableHeaders = ['Question', 'Answer'];
    tableRowsWithId: any[][] = [];

    ngOnChanges(changes: SimpleChanges) {
        var id = changes.quizId.currentValue;

        this.getQuestions(id);
    }

    getQuestions(id) {
        this.service.getQuestions(id).subscribe(response => {
            var questions = response.json().questions;

            this.setTableRows(questions);
        });
    }

    saveQuestion(obj) {
        console.log(obj);

        if (obj.id === -1) {
            this.service.addQuestion(this.quizId,
                {"question": obj.cells[0], "answer": obj.cells[1]})
                .subscribe(response => {
                    console.log(response);
                    this.onQuestionsUpdate.emit();
                })
        }
        else {
            this.service.updateQuestion(
                {"id": obj.id, "question": obj.cells[0], "answer": obj.cells[1]})
                .subscribe(response => {
                    console.log(response);
                })
        }
    }

    removeQuestion(obj) {
        this.service.deleteQuestion(obj.id)
            .subscribe(response => {
                console.log("remove");
                console.log(response);
                this.onQuestionsUpdate.emit();
            });
    }

    setTableRows(questions) {
        this.tableRowsWithId = [];

        if (questions.length > 0) {
            for (var i = 0; i < questions.length; i++) {
                this.tableRowsWithId[i] =
                    [questions[i]._id, questions[i].question, questions[i].answer];
            }
        }
    }

    constructor(private service: QuestionService) {
    }
}