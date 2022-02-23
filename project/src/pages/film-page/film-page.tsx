import Footer from '../../components/footer/footer';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import Header from '../../components/header/header';
import FilmCardFull from '../../components/film-card-full/film-card-full';

function FilmPage(): JSX.Element {
  return (
    <>
      <FilmCardFull title="The Grand Budapest Hotel" genre="Drama" year={2014} activeTab="overview">
        <Header classes="film-card__head" />
      </FilmCardFull>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCatalog films={[...new Array(4).keys()]} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;