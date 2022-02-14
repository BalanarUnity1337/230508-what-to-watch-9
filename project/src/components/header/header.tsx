import {PropsWithChildren} from 'react';
import Logo from '../logo/logo';
import HeaderUserBlock from '../header-user-block/header-user-block';
import mergeClasses from '../../utils/mergeClasses';

type HeaderProps = PropsWithChildren<{
  classes?: string[]
}>

function Header({classes, children}: HeaderProps): JSX.Element {
  const innerClassName: string = mergeClasses(classes, 'page-header');
  const isLoggedIn = true; // Будем брать из стора

  return (
    <header className={innerClassName}>
      <Logo />

      {children}

      {isLoggedIn && <HeaderUserBlock />}
    </header>
  );
}

export default Header;
