import ReviewCard from '../review/reviewCard';
import {Review} from '../../types/review';

type FilmCardReviewsProps = {
  reviews: Review[]
}

function FilmCardReviews({reviews}: FilmCardReviewsProps): JSX.Element {
  const columnOne: Review[] = [];
  const columnTwo: Review[] = [];

  reviews.forEach((review, index) => {
    if (index % 2 === 0) {
      columnOne.push(review);
    } else {
      columnTwo.push(review);
    }
  });

  return (
    <div className="film-card__reviews film-card__row">

      <div className="film-card__reviews-col">
        {columnOne.map((review) => <ReviewCard review={review} key={review.id} />)}
      </div>

      <div className="film-card__reviews-col">
        {columnTwo.map((review) => <ReviewCard review={review} key={review.id} />)}
      </div>
    </div>
  );
}

export default FilmCardReviews;
