import Footer from '../../components/footer/footer';
import FilmCardPromo from '../../components/film-card-promo/film-card-promo';
import Header from '../../components/header/header';
import GenresCatalog from '../../components/genres-catalog/genres-catalog';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import {Film} from '../../types/film';

type Props = {
  promoFilm: Film
  films: Film[]
}

function MainPage({promoFilm, films}: Props): JSX.Element {
  return (
    <>
      <FilmCardPromo film={promoFilm}>
        <Header classes="film-card__head" />
      </FilmCardPromo>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresCatalog/>

          <FilmCatalog films={films}/>

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
