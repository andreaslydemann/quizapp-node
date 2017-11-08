import {Component} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent{
    loggedInStatus = "Login";

    constructor(private authService: AuthenticationService) {
        authService.getLoggedInStatus.subscribe(status => this.changeStatus(status));
    }

    private changeStatus(status: string): void {
        this.loggedInStatus = status;
    }
}