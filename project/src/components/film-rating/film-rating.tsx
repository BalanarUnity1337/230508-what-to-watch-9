import {RatingLevel} from '../../constants';

type Props = {
  rating: number
  scoresCount: number
}

function FilmRating({rating, scoresCount}: Props): JSX.Element {
  let ratingLevel: RatingLevel = RatingLevel.Awesome;

  if (rating < 3) {
    ratingLevel = RatingLevel.Bad;
  } else if (rating < 5) {
    ratingLevel = RatingLevel.Normal;
  } else if (rating < 8) {
    ratingLevel = RatingLevel.Good;
  } else if (rating < 10) {
    ratingLevel = RatingLevel.VeryGood;
  }

  return (
    <div className="film-rating">
      <div className="film-rating__score">{rating.toFixed(1)}</div>

      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingLevel}</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
