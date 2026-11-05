import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeriesTerrorRoutingModule } from './series-terror-routing.module';
import { SeriesTerrorComponent } from './series-terror.component';

@NgModule({
  declarations: [SeriesTerrorComponent],
  imports: [CommonModule, SeriesTerrorRoutingModule],
})
export class SeriesTerrorModule {}
