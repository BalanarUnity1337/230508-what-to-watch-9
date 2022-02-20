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
      <a href="#" className="catalog__genres-link">
        {name}
      </a>
    </li>
  );
}

export default GenresCatalogItem;
