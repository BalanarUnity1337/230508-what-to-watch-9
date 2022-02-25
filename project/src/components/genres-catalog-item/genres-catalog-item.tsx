import {Link} from 'react-router-dom';
import {mergeClasses} from '../../shared/lib';

type Props = {
  name: string
  label: string
  active?: boolean
}

function GenresCatalogItem({name, label, active}: Props): JSX.Element {
  return (
    <li
      className={mergeClasses({
        'catalog__genres-item--active': active,
      },
      'catalog__genres-item')}
    >
      <Link className="catalog__genres-link" to={`?genre=${name}`} replace>
        {label}
      </Link>
    </li>
  );
}

export default GenresCatalogItem;
