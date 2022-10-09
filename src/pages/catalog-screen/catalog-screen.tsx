import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import CatalogList from '../../components/catalog-list/catalog-list';
import Pagination from '../../components/pagination/pagination';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchCamerasAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

function CatalogScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const data = dispatch(fetchCamerasAction());
  // eslint-disable-next-line no-console
  console.log(data);

  return(
    <HelmetProvider>
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
              </div>
            </section>
          </div>
        </main>

        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default CatalogScreen;
