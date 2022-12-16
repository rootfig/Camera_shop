import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getBuyedProduct } from '../../store/camera-slice/camera-slice';
import { changeIsAddItemStatus } from '../../store/cameras-slice/cameras-slice';
import { Camera } from '../../types/camera';

type CatalogItemProps = {
  camera: Camera;
  isCameraInBasket: boolean;
}

function CatalogItem({ camera, isCameraInBasket }: CatalogItemProps): JSX.Element {
  const { id, name, rating, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, reviewCount } = camera;
  const dispatch = useAppDispatch();

  const handleBuyButtonClick = () => {
    dispatch(changeIsAddItemStatus(true));
    dispatch(getBuyedProduct(camera));
  };

  return (
    <div className="product-card" data-testid='product-card'>
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`../${ previewImgWebp }, ../${ previewImgWebp2x }`}
          />
          <img
            src={ `../${previewImg}` }
            srcSet={ `../${previewImg2x}` }
            width="280"
            height="240"
            alt={ name }
          />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: { rating }</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ reviewCount }</p>
        </div>
        <p className="product-card__title">{ name }</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{ price } ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {isCameraInBasket ?
          <Link
            className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
            to={AppRoute.Basket}
          >
            <svg width="16" height="16" aria-hidden="true">
              <use xlinkHref="#icon-basket"></use>
            </svg>
            В корзине
          </Link>
          :
          <button
            className="btn btn--purple product-card__btn"
            type="button"
            onClick={handleBuyButtonClick}
          >
          Купить
          </button>}
        <Link className="btn btn--transparent" to={ `${AppRoute.Product}/${id}` }>
          Подробнее
        </Link>
      </div>
    </div>
  );
}

export default CatalogItem;
