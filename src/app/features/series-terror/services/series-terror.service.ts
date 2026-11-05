import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SerieTerror } from '../models/serie-terror.model';

/**
 * Catálogo tipado con las 10 series de terror verificadas.
 */
export const SERIES_TERROR_DATA: SerieTerror[] = [
  {
    id: 1,
    titulo: 'The Haunting of Hill House',
    anioEstreno: 2018,
    plataforma: 'Netflix',
    temporadas: 1,
    subgenero: 'Sobrenatural',
    sinopsis:
      'Cinco hermanos que crecieron en la mansión embrujada más famosa del país se ven obligados a reunirse tras una tragedia y enfrentar los fantasmas de su pasado.',
  },
  {
    id: 2,
    titulo: 'Stranger Things',
    anioEstreno: 2016,
    plataforma: 'Netflix',
    temporadas: 5,
    subgenero: 'Ciencia Ficción / Terror',
    sinopsis:
      'Tras la misteriosa desaparición de un niño en el pueblo de Hawkins, sus amigos y su familia descubren experimentos secretos y una dimensión oscura llamada el Upside Down.',
  },
  {
    id: 3,
    titulo: 'The Walking Dead',
    anioEstreno: 2010,
    plataforma: 'AMC',
    temporadas: 11,
    subgenero: 'Apocalipsis Zombi',
    sinopsis:
      'El sheriff Rick Grimes despierta de un coma en un mundo devastado por muertos vivientes y lidera a un grupo de supervivientes en busca de un refugio seguro.',
  },
  {
    id: 4,
    titulo: 'American Horror Story',
    anioEstreno: 2011,
    plataforma: 'FX / Hulu',
    temporadas: 12,
    subgenero: 'Antología',
    sinopsis:
      'Serie antológica donde cada temporada presenta una historia independiente con personajes y escenarios clásicos del terror: casas embrujadas, manicomios, aquelarres y hoteles malditos.',
  },
  {
    id: 5,
    titulo: 'Midnight Mass',
    anioEstreno: 2021,
    plataforma: 'Netflix',
    temporadas: 1,
    subgenero: 'Terror Religioso',
    sinopsis:
      'La llegada de un joven y carismático sacerdote a la aislada isla de Crockett desencadena sucesos milagrosos y presagios oscuros que desatan un fervor religioso extremo.',
  },
  {
    id: 6,
    titulo: 'Castle Rock',
    anioEstreno: 2018,
    plataforma: 'Hulu',
    temporadas: 2,
    subgenero: 'Terror Psicológico',
    sinopsis:
      'Serie antológica ambientada en el multiverso de Stephen King que entrelaza personajes y mitologías oscuras dentro del misterioso pueblo de Castle Rock, Maine.',
  },
  {
    id: 7,
    titulo: 'Penny Dreadful',
    anioEstreno: 2014,
    plataforma: 'Showtime',
    temporadas: 3,
    subgenero: 'Terror Gótico',
    sinopsis:
      'En el Londres victoriano, figuras clásicas como el Dr. Frankenstein, Dorian Gray y Vanessa Ives unen fuerzas para combatir amenazas sobrenaturales.',
  },
  {
    id: 8,
    titulo: 'Hannibal',
    anioEstreno: 2013,
    plataforma: 'NBC',
    temporadas: 3,
    subgenero: 'Thriller Psicológico',
    sinopsis:
      'El perfilador del FBI Will Graham desarrolla una compleja y peligrosa relación con el psiquiatra forense Dr. Hannibal Lecter, sin saber que es un asesino caníbal.',
  },
  {
    id: 9,
    titulo: 'Supernatural',
    anioEstreno: 2005,
    plataforma: 'The CW',
    temporadas: 15,
    subgenero: 'Sobrenatural',
    sinopsis:
      'Los hermanos Sam y Dean Winchester recorren Estados Unidos cazando demonios, fantasmas y criaturas sobrenaturales mientras enfrentan su propio destino familiar.',
  },
  {
    id: 10,
    titulo: 'Bates Motel',
    anioEstreno: 2013,
    plataforma: 'A&E',
    temporadas: 5,
    subgenero: 'Terror Psicológico',
    sinopsis:
      'Precuela contemporánea de Psicosis que retrata cómo la intensa y enfermiza relación entre Norman Bates y su madre Norma forja a uno de los asesinos más icónicos del cine.',
  },
];

/**
 * Servicio encargado de suministrar el listado de series de terror al módulo.
 */
@Injectable({
  providedIn: 'root',
})
export class SeriesTerrorService {
  /**
   * Obtiene todas las series de terror disponibles.
   * @returns Observable con el listado tipado de series de terror (`SerieTerror[]`).
   */
  getAllSeriesTerror(): Observable<SerieTerror[]> {
    return of(SERIES_TERROR_DATA);
  }
}
