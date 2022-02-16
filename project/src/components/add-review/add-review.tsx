import Form from '../form/form';
import RatingScale from '../rating-scale/rating-scale';

function AddReview(): JSX.Element {
  return (
    <div className="add-review">
      <Form classes="add-review__form">
        <RatingScale />

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" />

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default AddReview;
