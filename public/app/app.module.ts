import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent} from './navbar/navbar.component';
import { NotFoundComponent } from './notfound.component';
/*
export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent},
    { path: 'workouts', component: WorkoutsComponent},
    { path: 'exercises', component: ExercisesComponent},
    { path: '**', component: NotFoundComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
