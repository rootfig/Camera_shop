import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import CatalogList from '../../components/catalog-list/catalog-list';
import Pagination from '../../components/pagination/pagination';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { selectCameras } from '../../store/cameras-slice/selectorts';
import { useEffect, useState } from 'react';
import { Camera } from '../../types/camera';
import { useParams } from 'react-router-dom';


function CatalogScreen(): JSX.Element {
  const startNumbPage = 1;
  const maxImgPerPage = 9;

  const params = useParams();
  const currentNumbPage = Number(params.id) === null || typeof(params.id) === undefined ? startNumbPage : Number(params.id);

  const cameras = useAppSelector(selectCameras);
  const [products, setProducts] = useState<Camera[]>([]);
  const [currentPage, setCurrentPage] = useState(startNumbPage);
  const [productsPerPage] = useState(maxImgPerPage);

  useEffect(() => {
    if (cameras) {
      setCurrentPage(currentNumbPage);
      setProducts(cameras);
    }
  },[cameras, currentNumbPage]);
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = cameras.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

                    <CatalogList cameras={currentProducts} />

                    <Pagination
                      productsPerPage={productsPerPage}
                      totalProducts={products.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    />

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
