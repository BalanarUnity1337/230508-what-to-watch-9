import FilmCard from '../film-card/film-card';

type FilmCatalogProps = {
  // FIXME: Временное решение до интеграции с API
  films: number[]
}

function FilmCatalog({films}: FilmCatalogProps): JSX.Element {
  const filmCards: JSX.Element[] = films
    .map((item) => <FilmCard key={item} />);

  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}

export default FilmCatalog;
