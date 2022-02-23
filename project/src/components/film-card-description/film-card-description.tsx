import {IconAdd, IconInList, IconPlayS} from '../icons';
import {Film} from '../../types/film';

type FilmCardDescriptionProps = {
  film: Film
  withReviewButton?: boolean
}

function FilmCardDescription({film, withReviewButton}: FilmCardDescriptionProps): JSX.Element {
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">
        {film.name}
      </h2>

      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button">
          <IconPlayS />

          <span>Play</span>
        </button>

        <button className="btn btn--list film-card__button">
          {film.isFavorite ? <IconInList /> : <IconAdd />}

          <span>My list</span>
        </button>

        {
          withReviewButton &&
          <button className="btn film-card__button">
            <span>Add review</span>
          </button>
        }
      </div>
    </div>
  );
}

export default FilmCardDescription;
