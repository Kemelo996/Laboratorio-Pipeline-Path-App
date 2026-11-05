import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'series-terror',
        loadChildren: () =>
            import('./features/series-terror/series-terror.module').then(
                (m) => m.SeriesTerrorModule
            ),
    },
    {
        path: 'series-marvel',
        loadChildren: () =>
            import('./features/series-marvel/series-marvel.module').then(
                (m) => m.SeriesMarvelModule
            ),
    },
];
