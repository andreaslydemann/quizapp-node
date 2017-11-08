import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AlertService} from "../../alert/alert.service";
import {AuthenticationService} from "../authentication.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(private router: Router,
                private alertService: AlertService,
                private authService: AuthenticationService) {
    }

    register() {
        this.loading = true;
        this.authService.register(this.model.name, this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}