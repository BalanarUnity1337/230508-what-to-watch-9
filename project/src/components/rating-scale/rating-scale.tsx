import {ChangeEvent, Fragment} from 'react';

type Props = {
  rating: number
  onRatingChange: (rating: number) => void
}

function RatingScale({rating, onRatingChange}: Props): JSX.Element {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onRatingChange(Number(e.target.value));
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {[...new Array(10).keys()].reverse().map((item) => {
          const value = item + 1;

          return (
            <Fragment key={value}>
              <input
                className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked={value === rating}
                onChange={handleInputChange}
              />

              <label
                className="rating__label"
                htmlFor={`star-${value}`}
              >
                {`Rating ${value}`}
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}


export default RatingScale;
