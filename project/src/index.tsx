import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmPromo = {
  title: 'Fantastic Beasts: The Crimes of Grindelwald',
  genre: 'Kids & Family',
  year: 2018,
};

ReactDOM.render(
  <React.StrictMode>
    <App title={filmPromo.title} genre={filmPromo.genre} year={filmPromo.year} />
  </React.StrictMode>,
  document.getElementById('root'));
