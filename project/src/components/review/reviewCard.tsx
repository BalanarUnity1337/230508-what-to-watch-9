import {Review} from '../../types/review';

type ReviewCardProps = {
  review: Review
}

function ReviewCard({review}: ReviewCardProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {review.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>
            {new Date(review.date).toLocaleDateString('en', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>
  );
}

export default ReviewCard;
