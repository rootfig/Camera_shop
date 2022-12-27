import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsRemoveItemStatus, setCameraCount, setItemInGarbage } from '../../store/basket-slice/basket-slice';
import { selectItemsCount } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';

type BasketItemProps = {
  camera: Camera;
  count: number;
}

function BasketItem({ camera, count }: BasketItemProps) {
  const { name, vendorCode, price, level, type, previewImg, category, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;
  const dispatch = useAppDispatch();
  const itemsCount = useAppSelector(selectItemsCount);
  const [,setQuantity] = useState(itemsCount);

  const handleQuantityChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (Number(evt.target.value) <= 0) {
      setQuantity(1);
      return;
    }
    if (Number(evt.target.value) > 99) {
      setQuantity(99);
      dispatch(setCameraCount({id: camera.id, value: 99}));
      return;
    }
    setQuantity(Number(evt.target.value));
    dispatch(setCameraCount({id: camera.id, value: Number(evt.target.value)}));
  };

  const handleIncreaseBtnClick = () => {
    const cameraCountIncrease = count + 1;
    setQuantity(cameraCountIncrease);
    dispatch(setCameraCount({id: camera.id, value: cameraCountIncrease}));
  };

  const handleDecreaseBtnClick = () => {
    const cameraCountDecrease = count - 1;
    setQuantity(cameraCountDecrease);
    dispatch(setCameraCount({id: camera.id, value: cameraCountDecrease}));
  };

  const handleConfirmRemoveButtonClick = () => {
    dispatch(changeIsRemoveItemStatus(true));
    dispatch(setItemInGarbage(camera));
    document.body.style.overflow = 'hidden';
  };

  return (
    <li className="basket-item" data-testid='basket-item'>
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
        <button disabled={count === 1} className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара" onClick={handleDecreaseBtnClick}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        < input
          onChange={handleQuantityChange}
          type="number"
          id="counter1"
          value={ count }
          min="1" max="99"
          aria-label="количество товара"
        />
        <button disabled={count === 99} className="btn-icon btn-icon--next" aria-label="увеличить количество товара" onClick={handleIncreaseBtnClick}>
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{price * count}</div>
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
