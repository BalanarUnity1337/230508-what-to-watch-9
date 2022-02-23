import Header from '../../components/header/header';
import FilmCatalog from '../../components/film-catalog/film-catalog';
import Footer from '../../components/footer/footer';
import {Film} from '../../types/film';

type MyListPageProps = {
  films: Film[]
}

function MyListPage({films}: MyListPageProps): JSX.Element {
  return (
    <div className="user-page">
      <Header classes="user-page__head">
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCatalog films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
