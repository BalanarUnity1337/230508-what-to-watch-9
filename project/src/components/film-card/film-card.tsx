import {MouseEvent} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';
import {createFilmRoute} from '../../shared/lib/routing';

type Props = {
  film: Film
  onMouseOver: (film: Film) => void
  onMouseOut: () => void
}

function FilmCard({film, onMouseOver, onMouseOut}: Props): JSX.Element {
  const navigate = useNavigate();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film)}
      onMouseOut={onMouseOut}
      onClick={() => navigate(createFilmRoute(film.id))}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>

      <h3 className="small-film-card__title" onClick={(e: MouseEvent<HTMLHeadingElement>) => e.stopPropagation()}>
        <Link className="small-film-card__link" to={createFilmRoute(film.id)}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
