import { Component, OnInit, inject } from '@angular/core';
import { GeneroMarvel, SerieMarvel } from './models/serie-marvel.model';
import { SeriesMarvelService } from './services/series-marvel.service';

/**
 * Componente de la vista de Series de Marvel declarado en `SeriesMarvelModule`.
 */
@Component({
  selector: 'app-series-marvel',
  templateUrl: './series-marvel.component.html',
  styleUrl: './series-marvel.component.scss',
  standalone: false,
})
export class SeriesMarvelComponent implements OnInit {
  /** Listado de series de Marvel cargadas desde el servicio */
  series: SerieMarvel[] = [];

  /** Mapeo de géneros a clases visuales de badge */
  readonly generoBadgeMap: Record<GeneroMarvel, string> = {
    Superhéroes: 'badge-danger',
    'Ciencia ficción': 'badge-primary',
    'Acción y aventura': 'badge-warning',
    Drama: 'badge-purple',
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
