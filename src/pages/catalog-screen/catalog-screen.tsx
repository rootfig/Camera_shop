import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { Helmet } from 'react-helmet';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import CatalogList from '../../components/catalog-list/catalog-list';
import Pagination from '../../components/pagination/pagination';

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

        <div className="page-content">

          <Breadcrumbs />

          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">

                <CatalogFilter />

                <div className="catalog__content">

                  <CatalogSort />

                  <CatalogList />

                  <Pagination />

                </div>
              </div>
              <p>Каталог товаров</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default CatalogScreen;
