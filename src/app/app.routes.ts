import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Register } from './register/register';
import { Login } from './login/login';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: 'series-terror',
        loadChildren: () =>
            import('./features/series-terror/series-terror.module').then(
                (m) => m.SeriesTerrorModule
            ),
    },
];
