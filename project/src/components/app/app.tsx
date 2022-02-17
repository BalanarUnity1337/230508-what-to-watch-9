import Main from '../main/main';
import {PromoFilm} from '../../types/film';

type AppProps = {
  promoFilm: PromoFilm
}

function App({promoFilm}: AppProps): JSX.Element {
  return <Main promoFilm={promoFilm} />;
}

export default App;
