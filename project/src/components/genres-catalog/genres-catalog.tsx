import GenresCatalogItem from '../genres-catalog-item/genres-catalog-item';

function GenresCatalog(): JSX.Element {
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

  const genresItems: JSX.Element[] = genres.map((genre) => <GenresCatalogItem name={genre} key={genre} />);

  return (
    <ul className="catalog__genres-list">
      <GenresCatalogItem name="All genres" active />

      {genresItems}
    </ul>
  );
}

export default GenresCatalog;
