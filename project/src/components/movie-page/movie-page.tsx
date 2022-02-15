import Footer from '../footer/footer';
import CatalogFilms from '../catalog-films/catalog-films';
import Header from '../header/header';
import FilmCardFull from '../film-card-full/film-card-full';

function MoviePage(): JSX.Element {
  return (
    <>
      <FilmCardFull title="The Grand Budapest Hotel" genre="Drama" year={2014} activeTab="overview">
        <Header classes={['film-card__head']} />
      </FilmCardFull>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilms films={new Array(4).fill(0)} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
