import {RouterModule} from '@angular/router';

import {MyQuizzesComponent} from './my-quizzes/my-quizzes.component';
import {AllQuizzesComponent} from "./all-quizzes/all-quizzes.component";

export const QuizzesRouting = RouterModule.forChild([
    {path: '', component: MyQuizzesComponent},
    {path: 'all-quizzes', component: AllQuizzesComponent},
]);