import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SerieMarvel } from '../models/series-marvel.model';

export const SERIES_MARVEL_DATA: SerieMarvel[] = [
  {
    id: 1,
    titulo: 'WandaVision',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Ciencia ficción',
    sinopsis:
      'Wanda Maximoff y Vision viven una vida suburbana aparentemente perfecta, mientras extraños sucesos revelan una realidad distinta.',
  },
  {
    id: 2,
    titulo: 'The Falcon and the Winter Soldier',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Acción y aventura',
    sinopsis:
      'Sam Wilson y Bucky Barnes unen fuerzas para enfrentar una amenaza global y decidir qué significa portar el escudo del Capitán América.',
  },
  {
    id: 3,
    titulo: 'Loki',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 2,
    genero: 'Ciencia ficción',
    sinopsis:
      'Tras escapar con el Teseracto, Loki queda bajo la custodia de una organización que vigila las líneas temporales.',
  },
  {
    id: 4,
    titulo: 'Hawkeye',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Acción y aventura',
    sinopsis:
      'Clint Barton intenta volver con su familia mientras una nueva aliada y una amenaza de su pasado complican sus planes.',
  },
  {
    id: 5,
    titulo: 'Moon Knight',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Thriller',
    sinopsis:
      'Un empleado de museo descubre que comparte su vida con otra identidad y queda envuelto en un conflicto ligado a antiguos dioses.',
  },
  {
    id: 6,
    titulo: 'Ms. Marvel',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Superhéroes',
    sinopsis:
      'Kamala Khan, una adolescente fanática de los superhéroes, descubre poderes propios y aprende a usarlos para proteger a su comunidad.',
  },
  {
    id: 7,
    titulo: 'She-Hulk: Attorney at Law',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Drama',
    sinopsis:
      'La abogada Jennifer Walters equilibra su trabajo legal y su nueva vida como una heroína de gran tamaño.',
  },
  {
    id: 8,
    titulo: 'Secret Invasion',
    anioEstreno: 2023,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Thriller',
    sinopsis:
      'Nick Fury investiga una infiltración que amenaza la seguridad mundial y pone a prueba la confianza de sus aliados.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class SeriesMarvelService {
  getAllSeriesMarvel(): Observable<SerieMarvel[]> {
    return of(SERIES_MARVEL_DATA);
  }
}
