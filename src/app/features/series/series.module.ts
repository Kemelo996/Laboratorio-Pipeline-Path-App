import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesComponent } from './series.component';

@NgModule({
  declarations: [SeriesComponent],
  imports: [CommonModule, SeriesRoutingModule],
})
export class SeriesModule {}
