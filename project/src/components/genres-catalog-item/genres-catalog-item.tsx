import {Link} from 'react-router-dom';
import {mergeClasses} from '../../shared/lib';

type GenresCatalogItemProps = {
  name: string
  active?: boolean
}

function GenresCatalogItem({name, active}: GenresCatalogItemProps): JSX.Element {
  return (
    <li
      className={mergeClasses({
        'catalog__genres-item--active': active,
      },
      'catalog__genres-item')}
    >
      <Link className="catalog__genres-link" to={`?genre=${name}`}>
        {name}
      </Link>
    </li>
  );
}

export default GenresCatalogItem;
