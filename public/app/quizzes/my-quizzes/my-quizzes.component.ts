import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz.service";

@Component({
    selector: 'my-quizzes',
    templateUrl: './my-quizzes.component.html',
    styleUrls: ['./my-quizzes.component.css']
})
export class MyQuizzesComponent implements OnInit {
    quizzes: any[];
    quizLabel = "Quiz";
    questionsLabel = "Questions";
    selectedQuiz: number = 0;

    tableRowsWithId: any[][] = [];
    tableHeaders = ['Name', 'Description', 'Question Count'];
    dataType = ['string', 'string', 'number'];
    isEditable = [true, true, false];

    constructor(private service: QuizService) {
    }

    ngOnInit() {
        this.setTableRows();
    }

    updateQuestionsCount() {
        this.setTableRows();
    }

    saveQuiz(obj) {
        console.log(obj);

        if (obj.id === -1) {
            this.service.addQuiz(
                {"name": obj.cells[0], "description": obj.cells[1]})
                .subscribe(response => {
                    console.log(response);
                    this.updateQuestionsCount();
                })
        }
        else {
            this.service.updateQuiz(
                {"id": obj.id, "name": obj.cells[0], "description": obj.cells[1]})
                .subscribe(response => {
                    console.log(response);
                })
        }
    }

    removeQuiz(obj) {
        this.service.deleteQuiz(obj.id)
            .subscribe(response => {
                console.log(response);
            });
    }

    setTableRows() {
        this.service.getQuizzes().subscribe(response => {
            var quizzes = response.json();

            this.tableRowsWithId = [];

            for (var i = 0; i < quizzes.length; i++) {
                this.tableRowsWithId[i] =
                    [quizzes[i]._id, quizzes[i].name,
                        quizzes[i].description, quizzes[i].questions.length];
            }
        });
    }

    toggleQuestions(id: any) {
        if (this.selectedQuiz == id)
            this.selectedQuiz = 0;
        else
            this.selectedQuiz = id;
    }
}