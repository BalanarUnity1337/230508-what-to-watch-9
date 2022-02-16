import Header from '../header/header';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header classes="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCatalog films={[...new Array(9).keys()]} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
