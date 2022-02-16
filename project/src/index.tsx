import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {PromoFilm} from './types/film';

const promoFilm: PromoFilm = {
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Kids & Family',
  year: 2018,
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={promoFilm} />
  </React.StrictMode>,
  document.getElementById('root'));
