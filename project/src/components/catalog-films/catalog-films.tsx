import FilmCard from '../film-card/film-card';

type CatalogFilmsProps = {
  films: number[] // Временное решение до интеграции с API.
}

function CatalogFilms({films}: CatalogFilmsProps): JSX.Element {
  const filmCards: JSX.Element[] = films
    .map((item, index) => index)
    .map((item) => <FilmCard key={item} />);

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}

export default CatalogFilms;
