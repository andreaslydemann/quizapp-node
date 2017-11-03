import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {QuestionService} from "../question.service";
import {Question} from "../../shared/models/question";

@Component({
    selector: 'my-questions',
    templateUrl: './my-questions.component.html',
    styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit, OnChanges {
    questions: Question[] = [];
    @Input('quiz-id') quizId: number;
    question = " Question"

    tableHeaders = ['Question', 'Answer'];

    tableRowsWithId: any[][] = [
        [1, "What's your name?", "John"],
        [2, "What is your age again?", "22"]
    ];

    dataType = ['string', 'string'];

    ngOnChanges(changes: SimpleChanges) {
        var id = changes.quizId.currentValue;
        console.log(id);
        this.service.getQuestions(id).subscribe(response => {
            this.questions = response.json();
        });
    }

    constructor(private service: QuestionService) {
    }

    ngOnInit() {
    }
}