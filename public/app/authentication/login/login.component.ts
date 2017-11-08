import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from "../authentication.service";
import {AlertService} from "../../alert/alert.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    @Output() onLogin = new EventEmitter<any>();
    @Output() onLogout = new EventEmitter<any>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authService: AuthenticationService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        // reset login status
        this.authService.logout();
        this.onLogout.emit();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.onLogin.emit();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}