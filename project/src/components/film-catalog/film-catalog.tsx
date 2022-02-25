import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {Film} from '../../types/film';

type Props = {
  films: Film[]
}

function FilmCatalog({films}: Props): JSX.Element {
  const [, setActiveFilm] = useState<Film | null>(null);

  const handleFilmCardMouseOver = (film: Film) => {
    setActiveFilm(film);
  };

  const handleFilmCardMouseOut = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onMouseOver={handleFilmCardMouseOver}
          onMouseOut={handleFilmCardMouseOut}
        />))}
    </div>
  );
}

export default FilmCatalog;
