import { RouterModule  }     from '@angular/router';
import { NotFoundComponent } from './notfound.component';

export const AppRouting = RouterModule.forRoot([
    { path: '', redirectTo: 'not-found', pathMatch: 'full' },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);