import {Navigate} from 'react-router-dom';
import {ReactElement} from 'react';
import {AppRoute, AuthorizationStatus} from '../../shared/lib';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus
  children: ReactElement
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} replace />
  );
}

export default PrivateRoute;
