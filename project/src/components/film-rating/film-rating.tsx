type FilmRatingProps = {
  rating: number
  scoresCount: number
}

function FilmRating({rating, scoresCount}: FilmRatingProps): JSX.Element {
  // TODO: Формирование оценки

  return (
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>

      <p className="film-rating__meta">
        <span className="film-rating__level">Very good</span>
        <span className="film-rating__count">{scoresCount} ratings</span>
      </p>
    </div>
  );
}

export default FilmRating;
