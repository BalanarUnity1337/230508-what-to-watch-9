import Header from '../header/header';
import CatalogFilms from '../catalog-films/catalog-films';
import Footer from '../footer/footer';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header classes={['user-page__head']}>
        <h1 className="page-title  user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title  visually-hidden">Catalog</h2>

        <CatalogFilms films={new Array(9).fill(0)} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
