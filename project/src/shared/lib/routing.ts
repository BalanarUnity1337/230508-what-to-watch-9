import {AppRoute} from '../../constants';

export const createFilmRoute = (filmId: number): string => AppRoute.Film.replace(':id', String(filmId));

export const createAddReviewRoute = (filmId: number): string => `${createFilmRoute(filmId)}/${AppRoute.AddReview}`;

export const createPlayerRoute = (filmId: number): string => AppRoute.Player.replace(':id', String(filmId));
