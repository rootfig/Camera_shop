import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductCard from '../../components/product-card/product-card';
import SimilarList from '../../components/similars-list/similars-list';
import Reviews from '../../components/review/reviews';
import ReviewForm from '../../components/review/review-form/review-form';
import UpButton from '../../components/up-button/up-button';
import ReviewSuccess from '../../components/review/review-success/review-success';
import ItemAddModal from '../../components/item-add-modal/item-add-modal';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { fetchCameraAction, fetchReviewsAction, fetchSimilarAction } from '../../store/api-actions';
import { selectIsReviewSuccessOpen, selectReviews } from '../../store/reviews-slice/selectors';
import { fetchSuccessModalAction } from '../../store/reviews-slice/reviews-slice';
import { getIsAddItemStatus } from '../../store/cameras-slice/selectorts';
import { selectCamera } from '../../store/camera-slice/selectors';
import { useEffect, useState } from 'react';
import { REVIEWS_COUNT } from '../../constants';
import { Review } from '../../types/review';
import ModalCatalogAddItemSuccess from '../../components/modal-catalog-add-item-success/modal-catalog-add-item-success';
import { selectIsAddSuccessItemStatus } from '../../store/basket-slice/selectors';

function ProductScreen(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const cameraId = Number(params.id);
  const camera = useAppSelector(selectCamera);
  const reviewsData = useAppSelector(selectReviews);
  const reviews = [...reviewsData].sort((a, b) => (a.createAt > b.createAt ? -1 : 1));
  const isReviewSuccessOpen = useAppSelector(selectIsReviewSuccessOpen);
  const isAddItemStatus = useAppSelector(getIsAddItemStatus);
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);
  const isAddSuccessItemStatus = useAppSelector(selectIsAddSuccessItemStatus);

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
          <div className="page-content" data-testid='product-screen'>
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
          <UpButton />
          <ReviewForm setActive={setIsAddReviewModalOpen}
            cameraId={cameraId}
            isAddReviewModalOpen={isAddReviewModalOpen}
          />
          <ReviewSuccess handleReviewSuccessButtonClick={handleReviewSuccessButtonClick} isReviewSuccessOpen={isReviewSuccessOpen} />
          <ItemAddModal isAddItemStatus={isAddItemStatus} />
          <ModalCatalogAddItemSuccess isAddSuccessItemStatus={isAddSuccessItemStatus} />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default ProductScreen;
