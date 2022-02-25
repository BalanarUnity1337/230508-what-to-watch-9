import {useNavigate} from 'react-router-dom';
import {IconAdd, IconInList, IconPlayS} from '../icons';
import {Film} from '../../types/film';
import {createAddReviewRoute, createPlayerRoute} from '../../shared/lib/routing';

type Props = {
  film: Film
  withReviewButton?: boolean
}

function FilmCardDescription({film, withReviewButton}: Props): JSX.Element {
  const navigate = useNavigate();

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
        <button className="btn btn--play film-card__button" onClick={() => navigate(createPlayerRoute(film.id))}>
          <IconPlayS />

          <span>Play</span>
        </button>

        <button className="btn btn--list film-card__button">
          {film.isFavorite ? <IconInList /> : <IconAdd />}

          <span>My list</span>
        </button>

        {
          withReviewButton &&
          <button className="btn film-card__button" onClick={() => navigate(createAddReviewRoute(film.id))}>
            <span>Add review</span>
          </button>
        }
      </div>
    </div>
  );
}

export default FilmCardDescription;
