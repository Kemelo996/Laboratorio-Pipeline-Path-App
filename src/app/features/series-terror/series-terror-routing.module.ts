import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesTerrorComponent } from './series-terror.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesTerrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesTerrorRoutingModule {}
