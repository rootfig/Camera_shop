import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';

function CatalogScreen(): JSX.Element {
  return(
    <div>
      <Helmet>
        <title>Каталог - Фотошоп</title>
        <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
      </Helmet>
      <Header />
      <p>Каталог товаров</p>;
      <Footer />
    </div>
  );
}

export default CatalogScreen;
