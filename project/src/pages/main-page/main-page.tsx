import Footer from '../../components/footer/footer';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Header from '../../components/header/header';
import GenresCatalog from '../../components/genres-catalog/genres-catalog';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import {PromoFilm} from '../../types/film';

type MainPageProps = {
  promoFilm: PromoFilm
}

function MainPage({promoFilm}: MainPageProps): JSX.Element {
  return (
    <>
      <FilmCardPromo {...promoFilm}>
        <Header classes="film-card__head" />
      </FilmCardPromo>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresCatalog/>

          <FilmCatalog films={[...new Array(20).keys()]}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
