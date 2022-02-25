import {ReactNode} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {mergeClasses} from '../../shared/lib';

export interface FilmTab {
  name: string
  label: string
  content: ReactNode
}

type Props = {
  tabs: FilmTab[]
}

function FilmTabs({tabs}: Props): JSX.Element {
  const location = useLocation();
  const currentTabName = location.hash ? location.hash.slice(1) : tabs[0].name;
  const currentTab = tabs.find((tab) => tab.name === currentTabName) as FilmTab;

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            tabs.map((tab) => (
              <li
                key={tab.name}
                className={mergeClasses({
                  'film-nav__item--active': tab.name === currentTabName,
                }, 'film-nav__item')}
              >
                <Link className="film-nav__link" to={`#${tab.name}`}>
                  {tab.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      {currentTab.content}
    </>
  );
}

export default FilmTabs;
