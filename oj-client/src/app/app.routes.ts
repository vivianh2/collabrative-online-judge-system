import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

const routes: Routes = [
    {
        path:'',//www.bittiger.io -> www.bittiger.io/home
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'Problems',
        component: ProblemListComponent
    },
    {
        path: 'Problems/:id',//variable name
        component: ProblemDetailComponent
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];

export const routing = RouterModule.forRoot(routes);