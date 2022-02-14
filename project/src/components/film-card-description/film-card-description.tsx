import Button from '../button/button';
import IconPlayS from '../icons/icon-play-s/icon-play-s';
import IconAdd from '../icons/icon-add/icon-add';
import IconInList from '../icons/icon-in-list/icon-in-list';

type FilmCardDescriptionProps = {
  title: string
  genre: string
  year: number
  withReviewButton?: boolean
}

function FilmCardDescription({title, genre, year, withReviewButton}: FilmCardDescriptionProps): JSX.Element {
  const isFavorite = false; // Потом будем брать из объекта фильма, поэтому не стал выносить в props

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
        <Button icon={IconPlayS()} classes={['btn--play', 'film-card__button']}>
          Play
        </Button>

        <Button icon={isFavorite ? IconInList() : IconAdd()} classes={['btn--list', 'film-card__button']}>
          My list
        </Button>

        {
          withReviewButton &&
          <Button classes={['film-card__button']}>
            Add review
          </Button>
        }
      </div>
    </div>
  );
}

export default FilmCardDescription;
