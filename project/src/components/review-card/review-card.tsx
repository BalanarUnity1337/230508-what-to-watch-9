import {Review} from '../../types/review';

type Props = {
  review: Review
}

function ReviewCard({review}: Props): JSX.Element {
  const {
    comment,
    user,
    date,
    rating,
  } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>
            {new Date(date).toLocaleDateString('en', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toFixed(1)}</div>
    </div>
  );
}

export default ReviewCard;
