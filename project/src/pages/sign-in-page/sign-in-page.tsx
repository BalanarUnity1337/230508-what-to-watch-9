import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Form from '../../components/form/form';
import SignInField from '../../components/sign-in-field/sign-in-field';

function SignInPage(): JSX.Element {
  const errorMessage = '';

  return (
    <div className="user-page">
      <Header classes="user-page__head">
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <Form classes="sign-in__form">
          {
            errorMessage &&
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          }

          <div className="sign-in__fields">
            <SignInField label="Email address" type="email" placeholder="Email address" name="user-email" id="user-email" />

            <SignInField label="Password" type="password" placeholder="Password" name="user-password" id="user-password" error />
          </div>

          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  );
}

export default SignInPage;
