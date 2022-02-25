import {Navigate} from 'react-router-dom';
import {ReactElement} from 'react';
import {AppRoute, AuthorizationStatus} from '../../constants';

type Props = {
  authorizationStatus: AuthorizationStatus
  children: ReactElement
}

function PrivateRoute({authorizationStatus, children}: Props): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} replace />
  );
}

export default PrivateRoute;
