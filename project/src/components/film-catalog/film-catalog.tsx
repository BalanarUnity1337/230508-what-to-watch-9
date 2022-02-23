import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type FilmCatalogProps = {
  films: Film[]
}

function FilmCatalog({films}: FilmCatalogProps): JSX.Element {
  const [, setActiveFilm] = useState<Film | null>(null);

  const mouseOverHandler = (film: Film) => {
    setActiveFilm(film);
  };

  const mouseOutHandler = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />))}
    </div>
  );
}

export default FilmCatalog;
