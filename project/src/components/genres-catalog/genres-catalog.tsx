import {useSearchParams} from 'react-router-dom';
import GenresCatalogItem from '../genres-catalog-item/genres-catalog-item';
import {Genre} from '../../constants';

function GenresCatalog(): JSX.Element {
  const [searchParams] = useSearchParams();
  const currentGenre: keyof typeof Genre = searchParams.get('genre') as keyof typeof Genre || 'AllGenres';

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
