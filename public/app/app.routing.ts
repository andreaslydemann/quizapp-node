import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './notfound.component';
import {MyQuizzesComponent} from './quizzes/my-quizzes/my-quizzes.component';

export const AppRouting = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'my-quizzes',
        pathMatch: 'full'
    },
    {
        path: 'my-quizzes',
        component: MyQuizzesComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
]);