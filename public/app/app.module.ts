import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {QuizzesModule} from './quizzes/quizzes.module';

import {AppComponent} from './app.component';
import {NavBarComponent} from './navbar/navbar.component';
import {NotFoundComponent} from './notfound.component';

import {AppRouting} from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        QuizzesModule,
        AppRouting
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
