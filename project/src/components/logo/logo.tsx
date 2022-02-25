import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';
import {mergeClasses} from '../../shared/lib';

type Props = {
  light?: boolean
}

function Logo({light}: Props): JSX.Element {
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
