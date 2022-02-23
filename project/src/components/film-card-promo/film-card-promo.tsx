import {PropsWithChildren} from 'react';
import FilmCardDescription from '../film-card-description/film-card-description';
import {Film} from '../../types/film';

type FilmCardPromoProps = PropsWithChildren<{
  film: Film
}>

function FilmCardPromo({film, children}: FilmCardPromoProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {children}

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>

          <FilmCardDescription film={film} />
        </div>
      </div>
    </section>
  );
}

export default FilmCardPromo;
