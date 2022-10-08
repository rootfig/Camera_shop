import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import Banner from '../../components/banner/banner';

function CatalogScreen(): JSX.Element {
  return(
    <div className="wrapper">
      <Helmet>
        <title>Каталог - Фотошоп</title>
        <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
      </Helmet>
      <Header />
      <main>
        <Banner />
        <p>Каталог товаров</p>
      </main>
      <Footer />
    </div>
  );
}

export default CatalogScreen;
