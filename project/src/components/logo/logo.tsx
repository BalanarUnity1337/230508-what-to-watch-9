import {Link} from 'react-router-dom';
import {AppRoute, mergeClasses} from '../../shared/lib';

type LogoProps = {
  light?: boolean
}

function Logo({light}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <Link
        className={mergeClasses({
          'logo__link--light': light,
        },
        'logo__link')}
        to={AppRoute.Main}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
