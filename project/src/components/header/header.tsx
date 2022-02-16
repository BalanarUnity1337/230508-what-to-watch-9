import {PropsWithChildren} from 'react';
import Logo from '../logo/logo';
import HeaderUserBlock from '../header-user-block/header-user-block';
import {mergeClasses} from '../../shared/lib';

type HeaderProps = PropsWithChildren<{
  classes?: string
}>

function Header({classes, children}: HeaderProps): JSX.Element {
  const isLoggedIn = true;

  return (
    <header className={mergeClasses(classes, 'page-header')}>
      <Logo />

      {children}

      {isLoggedIn && <HeaderUserBlock />}
    </header>
  );
}

export default Header;
