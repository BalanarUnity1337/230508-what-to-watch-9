import {Link} from 'react-router-dom';

export interface Breadcrumb {
  path: string
  name: string
  current?: boolean
}

type Props = {
  items: Breadcrumb[]
}

function Breadcrumbs({items}: Props): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {
          items.map((breadcrumb) => (
            <li key={breadcrumb.name} className="breadcrumbs__item">
              {
                breadcrumb.current
                  ? (
                    <span className="breadcrumbs__link">
                      {breadcrumb.name}
                    </span>
                  )
                  : (
                    <Link className="breadcrumbs__link" to={breadcrumb.path}>
                      {breadcrumb.name}
                    </Link>
                  )
              }

            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
