import {useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import {IconFullScreen, IconPause, IconPlayS} from '../../components/icons';
import {Film} from '../../types/film';

type PlayerPageProps = {
  films: Film[]
}

function PlayerPage({films} : PlayerPageProps): JSX.Element {
  const [isPaused, setIsPaused] = useState(false);

  const params = useParams();
  const film: Film | null = films.find((item) => item.id === Number(params.id)) || null;

  if (!film) {
    return (<Navigate to="/404" />);
  }

  return (
    <div className="player">
      <video className="player__video" src={film.videoLink} poster={film.backgroundImage} />

      <button className="player__exit" type="button">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />

            <div
              className="player__toggler"
              style={{
                left: `${30}%`,
              }}
            >
              Toggler
            </div>
          </div>

          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            className="player__play"
            type="button"
            onClick={() => setIsPaused((prevState) => !prevState)}
          >
            {isPaused ? <IconPlayS /> : <IconPause />}

            <span>{isPaused ? 'Play' : 'Pause'}</span>
          </button>

          <div className="player__name">{film.name}</div>

          <button className="player__full-screen" type="button">
            <IconFullScreen />

            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
