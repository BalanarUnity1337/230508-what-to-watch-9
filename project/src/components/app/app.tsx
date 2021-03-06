import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {Film} from '../../types/film';
import {AppRoute, AuthorizationStatus} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {Review} from '../../types/review';

type Props = {
  promoFilm: Film
  films: Film[]
  reviews: Review[]
}

function App({promoFilm, films, reviews}: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.SignIn} element={<SignInPage />} />

        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} films={films} />} />

        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.Film}>
          <Route index element={<FilmPage films={films} reviews={reviews} />} />

          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReviewPage films={films} />
            </PrivateRoute>
          }
          />
        </Route>

        <Route path={AppRoute.Player} element={<PlayerPage films={films} />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
