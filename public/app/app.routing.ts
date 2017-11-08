import {RouterModule} from '@angular/router';
import {NotFoundComponent} from './notfound.component';
import {MyQuizzesComponent} from './quizzes/my-quizzes/my-quizzes.component';
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {AuthGuard} from './authentication/auth.guard';

export const AppRouting = RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'my-quizzes',
        pathMatch: 'full'
    },
    {
        path: 'my-quizzes',
        component: MyQuizzesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
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