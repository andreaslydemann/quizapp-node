import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyQuizzesComponent } from './my-quizzes/my-quizzes.component';
import { AllQuizzesComponent } from './all-quizzes/all-quizzes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyQuizzesComponent, AllQuizzesComponent]
})
export class QuizzesModule { }