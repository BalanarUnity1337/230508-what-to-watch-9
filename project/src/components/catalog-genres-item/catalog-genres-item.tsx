import {mergeClasses} from '../../shared/lib';

type CatalogGenresItemProps = {
  name: string
  active?: boolean
}

function CatalogGenresItem({name, active}: CatalogGenresItemProps): JSX.Element {
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

export default CatalogGenresItem;
