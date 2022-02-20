import {PropsWithChildren} from 'react';
import {Link} from 'react-router-dom';
import FilmCardOverview from '../film-card-overview/film-card-overview';
import FilmCardDetails from '../film-card-details/film-card-details';
import FilmCardReviews from '../film-card-reviews/film-card-reviews';
import FilmCardDescription from '../film-card-description/film-card-description';

type FilmCardFullProps = PropsWithChildren<{
  title: string
  genre: string
  year: number
  // FIXME: Временный пропс для тестирования компонента
  activeTab: 'overview' | 'details' | 'reviews'
}>

function FilmCardFull({title, genre, year, children, activeTab}: FilmCardFullProps): JSX.Element {
  const tabs: Record<FilmCardFullProps['activeTab'], JSX.Element> = {
    overview: <FilmCardOverview />,
    details: <FilmCardDetails />,
    reviews: <FilmCardReviews />,
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        {children}

        <div className="film-card__wrap">
          <FilmCardDescription title={title} genre={genre} year={year} withReviewButton />
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className={`film-nav__item  ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
                  <Link className="film-nav__link" to="#overview">
                    Overview
                  </Link>
                </li>

                <li className={`film-nav__item  ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
                  <Link className="film-nav__link" to="#details">
                    Details
                  </Link>
                </li>

                <li className={`film-nav__item  ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
                  <Link className="film-nav__link" to="#reviews">
                    Reviews
                  </Link>
                </li>
              </ul>
            </nav>

            {tabs[activeTab]}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilmCardFull;
