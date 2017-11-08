import {Injectable, Output, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    @Output() getLoggedInStatus: EventEmitter<any> = new EventEmitter();
    url: string;

    constructor(private http: Http) {
        this.url = environment.api;
    }

    login(email: string, password: string) {
        return this.http.post(this.url + '/login', {email: email, password: password})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                this.getLoggedInStatus.emit("Logout");
                return user;
            });
    }

    register(name: string, email: string, password: string) {
        return this.http.post(this.url + '/register', {
            name: name,
            email: email,
            password: password
        })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('jwt-token', user.token);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.getLoggedInStatus.emit('Login');
    }

    getToken() {
        if (window.localStorage['jwt-token']) {
            return window.localStorage['jwt-token'];
        } else {
            return '';
        }
    }

    isLoggedIn() {
        const token = this.getToken();
        if (token) {
            const payload = JSON.parse(window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }
}