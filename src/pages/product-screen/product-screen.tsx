import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCard from '../../components/product-card/product-card';
import SimilarCameras from '../../components/similars-list/similars-list';
import Review from '../../components/review/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCameraAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { selectCamera } from '../../store/camera-slice/selectors';

function ProductScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cameraId = params.id;
  const camera = useAppSelector(selectCamera);

  useEffect(() => {
    if (cameraId) {
      dispatch(fetchCameraAction(cameraId));
    }
  }, [cameraId, dispatch]);

  // eslint-disable-next-line no-console
  console.log(camera);

  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>{ camera.name } - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <Header />

        <main>

          <div className="page-content">

            <Breadcrumbs camera={camera} />

            <ProductCard camera={camera}/>

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
