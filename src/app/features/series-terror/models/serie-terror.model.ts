/**
 * Subgéneros de terror utilizados para clasificar las series y asignar estilos de badge.
 */
export type SubgeneroTerror =
  | 'Sobrenatural'
  | 'Ciencia Ficción / Terror'
  | 'Apocalipsis Zombi'
  | 'Antología'
  | 'Terror Religioso'
  | 'Terror Psicológico'
  | 'Terror Gótico'
  | 'Thriller Psicológico';

/**
 * Interfaz que representa una serie de terror en el catálogo del módulo.
 */
export interface SerieTerror {
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
  /** Subgénero principal dentro del terror */
  subgenero: SubgeneroTerror;
  /** Breve sinopsis libre de spoilers */
  sinopsis: string;
}
