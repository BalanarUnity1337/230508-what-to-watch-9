import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item';

function CatalogGenres(): JSX.Element {
  const genres: string[] = [
    'Comedies',
    'Crime',
    'Documentary',
    'Dramas',
    'Horror',
    'Kids & Family',
    'Romance',
    'Sci-Fi',
    'Thrillers',
  ];

  const genresItems: JSX.Element[] = genres.map((genre) => <CatalogGenresItem name={genre} key={genre} />);

  return (
    <ul className="catalog__genres-list">
      <CatalogGenresItem name="All genres" active />

      {genresItems}
    </ul>
  );
}

export default CatalogGenres;
