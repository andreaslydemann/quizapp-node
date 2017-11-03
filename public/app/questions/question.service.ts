import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from "@angular/http";

@Injectable()
export class QuestionService {
    url: string;

    constructor(private http: Http) {
        this.url = environment.api + '/' + 'questions';
    }

    getQuestions(id: number) {
        return this.http.get(this.url + '/' + id);
    }
}