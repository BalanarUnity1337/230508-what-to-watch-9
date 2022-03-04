import {useNavigate} from 'react-router-dom';
import {IconAdd, IconInList, IconPlayS} from '../../icons';
import {Film} from '../../../types/film';
import {createAddReviewRoute, createPlayerRoute} from '../../../shared/lib/routing';

type Props = {
  film: Film
  withReviewButton?: boolean
}

function FilmCardDescription({film, withReviewButton}: Props): JSX.Element {
  const navigate = useNavigate();

  const {
    id,
    name,
    genre,
    released,
    isFavorite,
  } = film;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">
        {name}
      </h2>

      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" onClick={() => navigate(createPlayerRoute(id))}>
          <IconPlayS />

          <span>Play</span>
        </button>

        <button className="btn btn--list film-card__button">
          {isFavorite ? <IconInList /> : <IconAdd />}

          <span>My list</span>
        </button>

        {
          withReviewButton &&
          <button className="btn film-card__button" onClick={() => navigate(createAddReviewRoute(id))}>
            <span>Add review</span>
          </button>
        }
      </div>
    </div>
  );
}

export default FilmCardDescription;
