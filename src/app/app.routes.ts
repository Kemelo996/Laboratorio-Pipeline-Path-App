import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'series-terror',
        pathMatch: 'full',
    },
    {
        path: 'series-terror',
        loadChildren: () =>
            import('./features/series-terror/series-terror.module').then(
                (m) => m.SeriesTerrorModule
            ),
    },
];
