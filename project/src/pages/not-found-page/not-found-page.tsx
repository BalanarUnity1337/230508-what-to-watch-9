import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page-content not-found-page">
      <Header classes="not-found-page__header" />

      <main className="not-found-page__content">
        <h1>404</h1>

        <p>Такой страницы не существует</p>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
