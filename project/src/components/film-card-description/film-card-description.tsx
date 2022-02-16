import {IconAdd, IconInList, IconPlayS} from '../icons';

type FilmCardDescriptionProps = {
  title: string
  genre: string
  year: number
  withReviewButton?: boolean
}

function FilmCardDescription({title, genre, year, withReviewButton}: FilmCardDescriptionProps): JSX.Element {
  const isFavorite = false;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">
        {title}
      </h2>

      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{year}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button">
          <IconPlayS />

          <span>Play</span>
        </button>

        <button className="btn btn--list film-card__button">
          {isFavorite ? <IconInList /> : <IconAdd />}

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
