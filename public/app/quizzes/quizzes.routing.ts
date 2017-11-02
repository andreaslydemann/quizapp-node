import {RouterModule} from '@angular/router';

import {MyQuizzesComponent} from './my-quizzes/my-quizzes.component';

export const QuizzesRouting = RouterModule.forChild([
    {path: '', component: MyQuizzesComponent}
]);