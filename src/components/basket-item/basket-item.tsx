import { useAppDispatch } from '../../hooks';
import { changeIsRemoveItemStatus, setItemInGarbage } from '../../store/basket-slice/basket-slice';
import { Camera } from '../../types/camera';
import { ProductCount } from '../../types/product-count';

type BasketItemProps = {
  order: Camera;
  productsCount: ProductCount;
  handleNextButtonClick: (order: Camera) => void;
  handlePrevButtonClick: (item: number) => void;
}

function BasketItem({ order, productsCount, handleNextButtonClick, handlePrevButtonClick }: BasketItemProps) {
  const { name, vendorCode, price, level, type, previewImg, category, previewImg2x, previewImgWebp, previewImgWebp2x } = order;
  const dispatch = useAppDispatch();
  let quantity = 0;
  const handleConfirmRemoveButtonClick = () => {
    dispatch(changeIsRemoveItemStatus(true));
    dispatch(setItemInGarbage(order));
  };

  for (const [id, count] of Object.entries(productsCount)) {
    if(Number(id) === order.id){
      quantity = Number(count);
    }
  }

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`../${ previewImgWebp }, ../${ previewImgWebp2x }`} />
          <img src={ `../${previewImg}` } srcSet={ `../${previewImg2x}` } width="140" height="120" alt={name} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{ category } { name }</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{ vendorCode }</span>
          </li>
          <li className="basket-item__list-item">{ type } фотокамера</li>
          <li className="basket-item__list-item">{ level } уровень</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{ price } ₽</p>
      <div className="quantity">
        <button disabled={quantity === 1} className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" onClick={() => handlePrevButtonClick(order.id)}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        < input type="number" id="counter1" value={ quantity } min="1" max="99" aria-label="количество товара" />
        <button disabled={quantity === 99} className="btn-icon btn-icon--next" aria-label="увеличить количество товара" onClick={() => handleNextButtonClick(order)}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{price * quantity}</div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={handleConfirmRemoveButtonClick}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
}

export default BasketItem;
