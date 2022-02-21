import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import {PromoFilm} from '../../types/film';
import {AppRoute, AuthorizationStatus} from '../../shared/lib';
import PrivateRoute from '../private-route/private-route';
import MyListPage from '../../pages/my-list-page/my-list-page';
import FilmPage from '../../pages/film-page/film-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  promoFilm: PromoFilm
}

function App({promoFilm}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.SignIn} element={<SignInPage />} />

        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} />} />

        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage />
          </PrivateRoute>
        }
        />

        <Route path={AppRoute.Film}>
          <Route index element={<FilmPage />} />

          <Route path={AppRoute.AddReview} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <AddReviewPage />
            </PrivateRoute>
          }
          />
        </Route>

        <Route path={AppRoute.Player} element={<PlayerPage />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
