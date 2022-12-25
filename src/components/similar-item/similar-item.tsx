import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch } from '../../hooks';
import { getBuyedProduct } from '../../store/camera-slice/camera-slice';
import { changeIsAddItemStatus } from '../../store/cameras-slice/cameras-slice';
import { Camera } from '../../types/camera';

type SimilarItemProps = {
  similar: Camera;
}

function SimilarItem({ similar }: SimilarItemProps):JSX.Element {
  const {id, price, previewImgWebp, previewImgWebp2x, reviewCount, rating, category, name} = similar;
  const dispatch = useAppDispatch();

  const handleBuyButtonClick = () => {
    dispatch(changeIsAddItemStatus(true));
    dispatch(getBuyedProduct(similar));
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="product-card is-active" data-testid='similar-item'>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={ `../${ previewImgWebp }, ../${ previewImgWebp2x }`} />
          <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
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
            <use xlinkHref="#icon-full-star"></use>
          </svg>
          <svg width="17" height="16" aria-hidden="true">
            <use xlinkHref="#icon-star"></use>
          </svg>
          <p className="visually-hidden">Рейтинг: { rating }</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{ reviewCount }</p>
        </div>
        <p className="product-card__title">{category} {name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{ price } ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button" onClick={handleBuyButtonClick}>Купить
        </button>
        <Link className="btn btn--transparent" to={ `${AppRoute.Product}/${id}` }>Подробнее
        </Link>
      </div>
    </div>
  );
}

export default SimilarItem;
