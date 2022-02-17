import {PropsWithChildren} from 'react';
import FilmCardDescription from '../film-card-description/film-card-description';

type FilmCardPromoProps = PropsWithChildren<{
  title: string
  genre: string
  year: number
}>

function FilmCardPromo({title, genre, year, children}: FilmCardPromoProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      {children}

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <FilmCardDescription title={title} genre={genre} year={year} />
        </div>
      </div>
    </section>
  );
}

export default FilmCardPromo;
