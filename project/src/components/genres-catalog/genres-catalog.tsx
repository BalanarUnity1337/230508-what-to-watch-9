import {useSearchParams} from 'react-router-dom';
import GenresCatalogItem from '../genres-catalog-item/genres-catalog-item';
import {Genre} from '../../constants';

type GenreName = keyof typeof Genre

function GenresCatalog(): JSX.Element {
  const [searchParams] = useSearchParams();
  const currentGenre: GenreName = searchParams.get('genre') as GenreName || 'AllGenres';

  return (
    <ul className="catalog__genres-list">
      {
        Object.entries(Genre).map(([name, label]) =>
          (
            <GenresCatalogItem
              key={name}
              name={name}
              label={label}
              active={name === currentGenre}
            />
          ))
      }
    </ul>
  );
}

export default GenresCatalog;
