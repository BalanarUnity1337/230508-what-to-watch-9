import {useParams, Navigate} from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {Film} from '../../types/film';
import {createAddReviewRoute, createFilmRoute} from '../../shared/lib/routing';

type Props = {
  films: Film[]
}

function AddReviewPage({films}: Props): JSX.Element {
  const params = useParams();
  const film: Film | null = films.find((item) => item.id === Number(params.id)) || null;

  if (!film) {
    return (<Navigate to="/404" />);
  }

  return (
    <section
      className="film-card film-card--full"
      style={{
        backgroundColor: film.backgroundColor,
      }}
    >
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <Breadcrumbs
            items={[
              {
                path: createFilmRoute(film.id),
                name: film.name,
              },
              {
                path: createAddReviewRoute(film.id),
                name: 'Add review',
              },
            ]}
          />
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />
    </section>
  );
}

export default AddReviewPage;
