import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';

import {QuestionsModule} from './questions/questions.module';
import {QuizzesModule} from './quizzes/quizzes.module';

import {AlertComponent} from "./alert/alert.component";
import {AppComponent} from './app.component';
import {LoginComponent} from './authentication/login/login.component';
import {NavBarComponent} from './navbar/navbar.component';
import {NotFoundComponent} from './notfound.component';
import {RegisterComponent} from './authentication/register/register.component';

import {AppRouting} from './app.routing';
import {AuthGuard} from "./authentication/auth.guard";
import {AuthenticationService} from "./authentication/authentication.service";
import {AlertService} from "./alert/alert.service";

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
        NavBarComponent,
        NotFoundComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        QuizzesModule,
        QuestionsModule,
        AppRouting
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}