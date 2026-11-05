import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SeriesMarvelRoutingModule } from './series-marvel-routing.module';
import { SeriesMarvelComponent } from './series-marvel.component';

@NgModule({
  declarations: [SeriesMarvelComponent],
  imports: [CommonModule, SeriesMarvelRoutingModule],
})
export class SeriesMarvelModule {}
