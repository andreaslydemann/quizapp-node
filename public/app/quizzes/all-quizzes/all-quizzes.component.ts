import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz.service";

@Component({
    selector: 'app-all-quizzes',
    templateUrl: './all-quizzes.component.html',
    styleUrls: ['./all-quizzes.component.css']
})
export class AllQuizzesComponent implements OnInit {
    quizzes = [];


    constructor(private service: QuizService) {
    }

    ngOnInit() {
        this.service.getQuizzes().subscribe(response => {
            this.quizzes = response.json();
        });
    }
}