import Footer from '../footer/footer';
import FilmCardPromo from '../film-card-promo/film-card-promo';
import Header from '../header/header';
import CatalogGenres from '../catalog-genres/catalog-genres';
import FilmCatalog from '../film-catalog/film-catalog';
import {PromoFilm} from '../../types/film';

type MainProps = {
  promoFilm: PromoFilm
}

function Main({promoFilm}: MainProps): JSX.Element {
  return (
    <>
      <FilmCardPromo title={promoFilm.title} genre={promoFilm.genre} year={promoFilm.year}>
        <Header classes="film-card__head" />
      </FilmCardPromo>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenres/>

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

export default Main;
