import {mergeClasses} from '../../shared/lib';

type LogoProps = {
  light?: boolean
}

function Logo({light}: LogoProps): JSX.Element {
  return (
    <div className="logo">
      <a
        className={mergeClasses({
          'logo__link--light': light,
        },
        'logo__link')}
        href="#"
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
