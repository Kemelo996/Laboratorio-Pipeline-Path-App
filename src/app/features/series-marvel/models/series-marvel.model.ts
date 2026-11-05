/**
 * Géneros utilizados para clasificar las series de Marvel y asignar estilos de badge.
 */
export type GeneroMarvel =
  | 'Superhéroes'
  | 'Ciencia ficción'
  | 'Acción y aventura'
  | 'Drama'
  | 'Thriller';

/**
 * Interfaz que representa una serie de Marvel en el catálogo del módulo.
 */
export interface SerieMarvel {
  /** Identificador único de la serie */
  id: number;
  /** Título oficial de la serie */
  titulo: string;
  /** Año de estreno de la primera temporada */
  anioEstreno: number;
  /** Plataforma de streaming o cadena original de emisión */
  plataforma: string;
  /** Número total de temporadas emitidas */
  temporadas: number;
  /** Género principal de la serie */
  genero: GeneroMarvel;
  /** Breve sinopsis libre de spoilers*/
  sinopsis: string;
}
