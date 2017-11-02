import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-quizzes',
    templateUrl: './my-quizzes.component.html',
    styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
    quizzes: any[];

    tableHeaders = ['Name', 'Description', 'Question Count'];

    tableRowsWithId: any[][] = [
        [1, "Science quiz", "This quiz is about science", 5],
        [2, "Math quiz", "This quiz is about math", 5]
    ];

    dataType = ['string', 'string', 'number'];
    isEditable = [true, true, false];

    // as argument: private _service: quizService
    constructor() {
    }

    ngOnInit() {
        /*this._service.getQuizzes()
            .subscribe(quizzes => this.quizzes = quizzes);*/
        this.quizzes = [{id: 1, name: "Science quiz", description: "This quiz is about science", difficulty: 5},
            {id: 2, name: "Math quiz", description: "This quiz is about math", difficulty: 5}]
    }
}