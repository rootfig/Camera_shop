import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProductCard from '../../components/product-card/product-card';
import SimilarList from '../../components/similars-list/similars-list';
import Reviews from '../../components/review/reviews';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCameraAction, fetchReviewsAction, fetchSimilarAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import { selectCamera } from '../../store/camera-slice/selectors';
import ReviewForm from '../../components/review/review-form/review-form';
import { selectIsReviewSuccessOpen, selectReviews } from '../../store/reviews-slice/selectors';
import { REVIEWS_COUNT } from '../../constants';
import { Review } from '../../types/review';
import UpButton from '../../components/up-button/up-button';
import ReviewSuccess from '../../components/review/review-success/review-success';
import { fetchSuccessModalAction } from '../../store/reviews-slice/reviews-slice';

function ProductScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cameraId = Number(params.id);
  const camera = useAppSelector(selectCamera);
  const reviewsData = useAppSelector(selectReviews);
  const reviews = [...reviewsData].sort((a, b) => (a.createAt > b.createAt ? -1 : 1));
  const isReviewSuccessOpen = useAppSelector(selectIsReviewSuccessOpen);

  // eslint-disable-next-line no-console
  console.log(reviews);
  // eslint-disable-next-line no-console
  console.log(isReviewSuccessOpen);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);


  useEffect(() => {
    if (cameraId) {
      dispatch(fetchCameraAction(cameraId));
      dispatch(fetchSimilarAction(cameraId));
      dispatch(fetchReviewsAction(cameraId));
    }
  }, [isAddReviewModalOpen, cameraId, dispatch]);

  const handleAddReviewButtonClick = () => {
    setIsAddReviewModalOpen(true);
  };

  const handleReviewSuccessButtonClick = () => {

    dispatch(fetchSuccessModalAction());
  };

  const [reviewsListCount, setReviewsListCount] = useState<number>(REVIEWS_COUNT);

  const getReviewsList = (items: Review[]) => items.slice(0, reviewsListCount);

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
            <SimilarList />
            <Reviews
              reviews={getReviewsList(reviews)}
              handleAddReviewButtonClick={handleAddReviewButtonClick}
              onChangeReviewsListCount={setReviewsListCount}
              reviewsListCount={reviewsListCount}
            />
          </div>
          { isAddReviewModalOpen && <ReviewForm setActive={setIsAddReviewModalOpen} cameraId={cameraId}/>}
          <ReviewSuccess handleReviewSuccessButtonClick={handleReviewSuccessButtonClick} isReviewSuccessOpen={isReviewSuccessOpen} />
        </main>
        <UpButton />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default ProductScreen;
