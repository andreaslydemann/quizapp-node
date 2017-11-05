import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from "@angular/http";

@Injectable()
export class QuizService {
    url: string;

    constructor(private http: Http) {
        this.url = environment.api + '/' + 'quizzes';
    }

    getQuizzes() {
        return this.http.get(this.url);
    }

    deleteQuiz(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    addQuiz(quiz) {
        return this.http.post(this.url, quiz);
    }

    updateQuiz(quiz) {
        return this.http.put(this.url + '/' + quiz.id, quiz);
    }
}
