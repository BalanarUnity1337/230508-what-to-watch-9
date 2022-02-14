// TODO: После роутинга добавить пропсы
function Breadcrumbs(): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">The Grand Budapest Hotel</a>
        </li>

        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
