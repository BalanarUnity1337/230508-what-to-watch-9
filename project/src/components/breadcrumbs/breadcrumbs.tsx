import {NavLink} from 'react-router-dom';

export interface Breadcrumb {
  path: string
  name: string
}

type Props = {
  items: Breadcrumb[]
}

function Breadcrumbs({items}: Props): JSX.Element {
  const activeStyle = {
    pointerEvents: 'none',
  };

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {
          items.map((breadcrumb) => (
            <li key={breadcrumb.path} className="breadcrumbs__item">
              <NavLink
                className="breadcrumbs__link"
                style={({isActive}) => isActive ? activeStyle : {}}
                to={breadcrumb.path}
                end
              >
                {breadcrumb.name}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
