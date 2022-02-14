import Footer from '../footer/footer';
import FilmCardPromo from '../film-card-promo/film-card-promo';
import Header from '../header/header';
import CatalogGenres from '../catalog-genres/catalog-genres';
import CatalogFilms from '../catalog-films/catalog-films';

type MainProps = {
  title: string
  genre: string
  year: number
}

function Main({title, genre, year}: MainProps): JSX.Element {
  return (
    <>
      <FilmCardPromo title={title} genre={genre} year={year}>
        <Header classes={['film-card__head']} />
      </FilmCardPromo>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title  visually-hidden">Catalog</h2>

          <CatalogGenres/>

          <CatalogFilms films={new Array(20).fill(0)}/>

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
