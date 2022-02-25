import {PropsWithChildren} from 'react';
import FilmCardOverview from '../film-card-overview/film-card-overview';
import FilmCardDetails from '../film-card-details/film-card-details';
import FilmCardReviews from '../film-card-reviews/film-card-reviews';
import FilmCardDescription from '../film-card-description/film-card-description';
import {Film} from '../../types/film';
import {Review} from '../../types/review';
import FilmTabs from '../film-tabs/film-tabs';

type Props = PropsWithChildren<{
  film: Film
  reviews: Review[]
}>

function FilmCardFull({film, reviews, children}: Props): JSX.Element {
  return (
    <section
      className="film-card film-card--full"
      style={{
        backgroundColor: film.backgroundColor,
      }}
    >
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        {children}

        <div className="film-card__wrap">
          <FilmCardDescription film={film} withReviewButton />
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <FilmTabs tabs={[
              {
                name: 'overview',
                label: 'Overview',
                content: <FilmCardOverview film={film} />,
              },
              {
                name: 'details',
                label: 'Details',
                content: <FilmCardDetails film={film} />,
              },
              {
                name: 'reviews',
                label: 'Reviews',
                content: <FilmCardReviews reviews={reviews} />,
              },
            ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;
