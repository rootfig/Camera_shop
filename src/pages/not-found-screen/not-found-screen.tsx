import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Not Found - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <Header />

        <main>

          <Banner />

          <div className="page-content">

            <h1>404 Страница не найдена</h1>
          </div>
        </main>

        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default NotFoundScreen;
