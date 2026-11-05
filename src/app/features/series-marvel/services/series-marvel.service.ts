import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SerieMarvel } from '../models/serie-marvel.model';

/**
 * Catálogo de 10 series de Marvel.
 */
export const SERIES_MARVEL_DATA: SerieMarvel[] = [
  {
    id: 1,
    titulo: 'WandaVision',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Ciencia ficción',
    sinopsis:
      'Wanda Maximoff y Vision viven una vida suburbana aparentemente perfecta, mientras extraños sucesos revelan que algo no encaja en su realidad.',
  },
  {
    id: 2,
    titulo: 'The Falcon and the Winter Soldier',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Acción y aventura',
    sinopsis:
      'Sam Wilson y Bucky Barnes unen fuerzas para afrontar una amenaza global y decidir qué significa llevar el legado del Capitán América.',
  },
  {
    id: 3,
    titulo: 'Loki',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 2,
    genero: 'Ciencia ficción',
    sinopsis:
      'Tras escapar con el Teseracto, Loki queda bajo la custodia de la AVT y se ve envuelto en una aventura que pone en juego distintas líneas temporales.',
  },
  {
    id: 4,
    titulo: 'Hawkeye',
    anioEstreno: 2021,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Acción y aventura',
    sinopsis:
      'En Nueva York durante las fiestas, Clint Barton forma una inesperada alianza con la joven arquera Kate Bishop mientras intenta volver con su familia.',
  },
  {
    id: 5,
    titulo: 'Moon Knight',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Thriller',
    sinopsis:
      'Un empleado de una tienda de regalos descubre que comparte su cuerpo con un mercenario y queda atrapado en un misterio ligado a dioses egipcios.',
  },
  {
    id: 6,
    titulo: 'Ms. Marvel',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Superhéroes',
    sinopsis:
      'Kamala Khan, una adolescente fan de los superhéroes de Jersey City, descubre poderes propios y comienza a definir su identidad como heroína.',
  },
  {
    id: 7,
    titulo: 'She-Hulk: Attorney at Law',
    anioEstreno: 2022,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Drama',
    sinopsis:
      'La abogada Jennifer Walters equilibra su trabajo representando casos sobrehumanos con su nueva vida como She-Hulk.',
  },
  {
    id: 8,
    titulo: 'Secret Invasion',
    anioEstreno: 2023,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Thriller',
    sinopsis:
      'Nick Fury regresa para detener una infiltración de Skrulls que amenaza con desestabilizar el mundo desde las sombras.',
  },
  {
    id: 9,
    titulo: 'Echo',
    anioEstreno: 2024,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Drama',
    sinopsis:
      'Maya Lopez vuelve a su hogar en Oklahoma y se enfrenta a su pasado mientras intenta reconectar con sus raíces y su comunidad.',
  },
  {
    id: 10,
    titulo: 'Agatha All Along',
    anioEstreno: 2024,
    plataforma: 'Disney+',
    temporadas: 1,
    genero: 'Superhéroes',
    sinopsis:
      'Agatha Harkness busca recuperar sus poderes y emprende un peligroso recorrido por el Sendero de las Brujas junto a un nuevo aquelarre.',
  },
];

/**
 * Servicio encargado de suministrar el listado de series de Marvel al módulo.
 */
@Injectable({
  providedIn: 'root',
})
export class SeriesMarvelService {
  /**
   * Obtiene todas las series de Marvel disponibles.
   * @returns Observable con el listado tipado de series de Marvel (`SerieMarvel[]`).
   */
  getAllSeriesMarvel(): Observable<SerieMarvel[]> {
    return of(SERIES_MARVEL_DATA);
  }
}
