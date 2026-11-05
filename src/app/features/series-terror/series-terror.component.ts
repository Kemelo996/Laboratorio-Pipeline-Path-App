import { Component, OnInit, inject } from '@angular/core';
import { SerieTerror, SubgeneroTerror } from './models/serie-terror.model';
import { SeriesTerrorService } from './services/series-terror.service';

/**
 * Componente de la vista de Series de Terror declarado en `SeriesTerrorModule`.
 */
@Component({
  selector: 'app-series-terror',
  templateUrl: './series-terror.component.html',
  styleUrl: './series-terror.component.scss',
  standalone: false,
})
export class SeriesTerrorComponent implements OnInit {
  /** Listado de series de terror cargadas desde el servicio */
  series: SerieTerror[] = [];

  /** Mapeo de subgéneros a clases visuales de badge (patrón de taller-2-modularidad) */
  readonly subgeneroBadgeMap: Record<SubgeneroTerror, string> = {
    'Sobrenatural': 'badge-danger',
    'Ciencia Ficción / Terror': 'badge-primary',
    'Apocalipsis Zombi': 'badge-warning',
    'Antología': 'badge-purple',
    'Terror Religioso': 'badge-dark',
    'Terror Psicológico': 'badge-info',
    'Terror Gótico': 'badge-secondary',
    'Thriller Psicológico': 'badge-success',
  };

  private readonly seriesTerrorService = inject(SeriesTerrorService);

  ngOnInit(): void {
    this.seriesTerrorService.getAllSeriesTerror().subscribe({
      next: (data) => (this.series = data),
      error: (err) => console.error(err),
    });
  }
}
