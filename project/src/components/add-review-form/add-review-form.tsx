import {ChangeEvent, useState} from 'react';
import Form from '../form/form';
import RatingScale from '../rating-scale/rating-scale';

function AddReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div className="add-review">
      <Form classes="add-review__form">
        <RatingScale rating={rating} onRatingChange={setRating} />

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            value={comment}
            onChange={handleTextAreaChange}
          />

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default AddReviewForm;
