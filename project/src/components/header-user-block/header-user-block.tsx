import {Link} from 'react-router-dom';
import {AppRoute} from '../../shared/lib';

function HeaderUserBlock(): JSX.Element {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>

        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="user-block">
      <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>
    </div>
  );
}

export default HeaderUserBlock;
