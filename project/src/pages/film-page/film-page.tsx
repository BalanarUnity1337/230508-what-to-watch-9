import {useParams, Navigate} from 'react-router-dom';
import Footer from '../../components/footer/footer';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import Header from '../../components/header/header';
import FilmCardFull from '../../components/film-card-full/film-card-full';
import {Film} from '../../types/film';
import {Review} from '../../types/review';

type Props = {
  films: Film[]
  reviews: Review[]
}

function FilmPage({films, reviews}: Props): JSX.Element {
  const params = useParams();
  const film: Film | null = films.find((item) => item.id === Number(params.id)) || null;

  if (!film) {
    return (<Navigate to="/404" />);
  }

  return (
    <>
      <FilmCardFull film={film} reviews={reviews}>
        <Header classes="film-card__head" />
      </FilmCardFull>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCatalog films={films.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
