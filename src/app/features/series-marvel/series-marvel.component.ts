import { Component, OnInit, inject } from '@angular/core';
import { GeneroMarvel, SerieMarvel } from './models/series-marvel.model';
import { SeriesMarvelService } from './services/series-marvel.service';

@Component({
  selector: 'app-series-marvel',
  templateUrl: './series-marvel.component.html',
  styleUrl: './series-marvel.component.scss',
  standalone: false,
})
export class SeriesMarvelComponent implements OnInit {
  series: SerieMarvel[] = [];

  readonly generoBadgeMap: Record<GeneroMarvel, string> = {
    Superhéroes: 'badge-danger',
    'Ciencia ficción': 'badge-primary',
    'Acción y aventura': 'badge-warning',
    Drama: 'badge-secondary',
    Thriller: 'badge-dark',
  };

  private readonly seriesMarvelService = inject(SeriesMarvelService);

  ngOnInit(): void {
    this.seriesMarvelService.getAllSeriesMarvel().subscribe({
      next: (data) => (this.series = data),
      error: (err) => console.error(err),
    });
  }
}
