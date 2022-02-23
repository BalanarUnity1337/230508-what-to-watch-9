import {AppRoute} from './constants';

export const createFilmRoute = (filmId: number): string => AppRoute.Film.replace(':id', String(filmId));
