import { Component, OnInit, inject } from '@angular/core';
import { Serie } from './models/serie.model';
import { SeriesService } from './services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss',
  standalone: false,
})
export class SeriesComponent implements OnInit {
  series: Serie[] = [];

  private readonly seriesService = inject(SeriesService);

  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe({
      next: (data) => (this.series = data),
      error: (err) => console.error(err),
    });
  }
}
