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
    {
        path: 'series',
        loadChildren: () =>
            import('./features/series/series.module').then((m) => m.SeriesModule),
    },
];
