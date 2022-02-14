type CatalogGenresItemProps = {
  name: string
  active?: boolean
}

function CatalogGenresItem({name, active}: CatalogGenresItemProps): JSX.Element {
  const activeClassName: string = active ? 'catalog__genres-item--active' : '';

  return (
    <li className={`catalog__genres-item ${activeClassName}`}>
      <a href="#" className="catalog__genres-link">
        {name}
      </a>
    </li>
  );
}

export default CatalogGenresItem;
