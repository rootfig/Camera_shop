import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCard from '../../components/product-card/product-card';
import SimilarCameras from '../../components/similar/similar-cameras';
import Review from '../../components/review/review';
import { useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCameraAction } from '../../store/api-actions';
import { useEffect } from 'react';

function ProductScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cameraId = params.id;

  useEffect(() => {
    if (cameraId) {
      dispatch(fetchCameraAction(cameraId));
    }
  }, [cameraId, dispatch]);

  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Продукт - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <Header />

        <main>

          <div className="page-content">

            <Breadcrumbs />

            <ProductCard />

            <SimilarCameras />

            <Review />

          </div>
        </main>

        <Footer />

      </div>
    </HelmetProvider>
  );
}

export default ProductScreen;
