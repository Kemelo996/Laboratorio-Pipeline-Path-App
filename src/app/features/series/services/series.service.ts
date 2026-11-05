import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from '../models/serie.model';

function crearPlaceholder(titulo: string, color: string): string {
  const tituloSeguro = titulo.replace(/[&<>"']/g, (caracter) => {
    const entidades: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
    };
    return entidades[caracter];
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="160" viewBox="0 0 120 160"><rect width="120" height="160" fill="${color}"/><circle cx="60" cy="58" r="32" fill="none" stroke="#93c5fd" stroke-width="2"/><path d="M28 58h64M60 26v64M37 35l46 46M83 35 37 81" stroke="#93c5fd" stroke-width="1" opacity=".65"/><text x="60" y="115" fill="#fff" font-family="system-ui,sans-serif" font-size="10" text-anchor="middle">${tituloSeguro}</text><text x="60" y="135" fill="#bfdbfe" font-family="system-ui,sans-serif" font-size="9" text-anchor="middle">CIENCIA FICCIÓN</text></svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const SERIES_DATA: Serie[] = [
  {
    id: 1,
    titulo: 'The Expanse',
    anioEstreno: 2015,
    temporadas: 6,
    imagen: crearPlaceholder('The Expanse', '#172554'),
    sinopsis:
      'En un futuro donde la humanidad colonizó el sistema solar, una desaparición revela una conspiración que amenaza la paz.',
  },
  {
    id: 2,
    titulo: 'Dark',
    anioEstreno: 2017,
    temporadas: 3,
    imagen: crearPlaceholder('Dark', '#312e81'),
    sinopsis:
      'La desaparición de dos niños destapa secretos familiares y una trama de viajes en el tiempo en un pueblo alemán.',
  },
  {
    id: 3,
    titulo: 'Black Mirror',
    anioEstreno: 2011,
    temporadas: 7,
    imagen: crearPlaceholder('Black Mirror', '#334155'),
    sinopsis:
      'Antología de historias independientes sobre las consecuencias inesperadas de la tecnología en la vida cotidiana.',
  },
  {
    id: 4,
    titulo: 'Foundation',
    anioEstreno: 2021,
    temporadas: 3,
    imagen: crearPlaceholder('Foundation', '#1e3a8a'),
    sinopsis:
      'Un matemático predice la caída de un imperio galáctico e intenta preservar el conocimiento para reconstruir la civilización.',
  },
  {
    id: 5,
    titulo: 'Severance',
    anioEstreno: 2022,
    temporadas: 2,
    imagen: crearPlaceholder('Severance', '#164e63'),
    sinopsis:
      'Un grupo de empleados acepta un procedimiento que separa por completo sus recuerdos laborales de su vida personal.',
  },
  {
    id: 6,
    titulo: 'Silo',
    anioEstreno: 2023,
    temporadas: 2,
    imagen: crearPlaceholder('Silo', '#44403c'),
    sinopsis:
      'Los últimos habitantes de la Tierra viven bajo tierra, sujetos a reglas estrictas y a preguntas sobre el mundo exterior.',
  },
  {
    id: 7,
    titulo: 'Battlestar Galactica',
    anioEstreno: 2004,
    temporadas: 4,
    imagen: crearPlaceholder('Battlestar Galactica', '#1f2937'),
    sinopsis:
      'Tras un ataque devastador, una flota de supervivientes busca un nuevo hogar mientras escapa de sus enemigos robóticos.',
  },
  {
    id: 8,
    titulo: 'Firefly',
    anioEstreno: 2002,
    temporadas: 1,
    imagen: crearPlaceholder('Firefly', '#7c2d12'),
    sinopsis:
      'La tripulación de una nave espacial acepta trabajos al margen de la ley en los confines de un sistema colonizado.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  getAllSeries(): Observable<Serie[]> {
    return of(SERIES_DATA);
  }
}
