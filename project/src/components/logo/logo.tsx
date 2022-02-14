type LogoProps = {
  light?: boolean
}

function Logo({light}: LogoProps): JSX.Element {
  const lightClassName: string = light ? 'logo__link--light' : '';

  return (
    <div className="logo">
      <a className={`logo__link ${lightClassName}`} href="#">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
