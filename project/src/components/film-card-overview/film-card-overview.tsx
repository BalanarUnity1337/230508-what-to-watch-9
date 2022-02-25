import FilmRating from '../film-rating/film-rating';
import {Film} from '../../types/film';

type Props = {
  film: Film
}

function FilmCardOverview({film}: Props): JSX.Element {
  return (
    <>
      <FilmRating rating={film.rating} scoresCount={film.scoresCount} />

      <div className="film-card__text">
        <p>
          {film.description}
        </p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmCardOverview;
