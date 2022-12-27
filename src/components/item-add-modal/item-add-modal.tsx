import { useAppDispatch, useAppSelector } from '../../hooks';
import useKeydown from '../../hooks/use-keydown';
import { changeIsAddItemStatus } from '../../store/cameras-slice/cameras-slice';
// import { Camera } from '../../types/camera';
import { selectBuyedCamera } from '../../store/camera-slice/selectors';
// import useLocalStorage from '../../hooks/use-local-storage';
import { addItemInBasket, changeIsAddSuccessItemStatus } from '../../store/basket-slice/basket-slice';
import { useEffect } from 'react';
import ReactFocusLock from 'react-focus-lock';
import { useForm } from 'react-hook-form';
// import { selectOrdersInBasket } from '../../store/basket-slice/selectors';

type ItemAddModalType = {
  isAddItemStatus: boolean;
}

function ItemAddModal({ isAddItemStatus }: ItemAddModalType): JSX.Element {
  const dispatch = useAppDispatch();
  const targetCamera = useAppSelector(selectBuyedCamera);

  const {name, category, vendorCode, type, level, previewImgWebp, price, previewImgWebp2x, previewImg, previewImg2x} = targetCamera;

  const handleAddToOrderButtonClick = () => {

    dispatch(addItemInBasket(targetCamera));
    // addToOrder(targetCamera);
    dispatch(changeIsAddItemStatus(false));
    dispatch(changeIsAddSuccessItemStatus(true));
    document.body.style.overflow = 'hidden';
  };

  const handleCloseButtonClick = () => {
    dispatch(changeIsAddItemStatus(false));
    document.body.style.overflow = 'scroll';
  };

  useKeydown('Escape', () => {
    dispatch(changeIsAddItemStatus(false));
    document.body.style.overflow = 'scroll';
  });

  const {setFocus} = useForm();

  useEffect(() => {
    setFocus('modal__btn--fit-width');
  },[setFocus]);

  return (
    <ReactFocusLock>
      <div className={isAddItemStatus ? 'modal is-active' : 'modal'}>
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={handleCloseButtonClick}></div>
          <div className="modal__content">
            <p className="title title--h4">Добавить товар в корзину</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type="image/webp" srcSet={`../${ previewImgWebp }, ../${ previewImgWebp2x }`} />
                  <img src={`../${previewImg}`} srcSet={ `../${previewImg2x}` } width="140" height="120" alt={`${ category } ${ name }`} />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">{ category } { name }</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{ vendorCode }</span>
                  </li>
                  <li className="basket-item__list-item">{ type } камера</li>
                  <li className="basket-item__list-item">{ level } уровень</li>
                </ul>
                <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{ price } ₽</p>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleAddToOrderButtonClick}>
                <svg width="24" height="16" aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"></use>
                </svg>Добавить в корзину
              </button>
            </div>
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={handleCloseButtonClick}
              onBlur={() => setFocus('modal__btn--fit-width')}
            >
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ ReactFocusLock>
  );
}

export default ItemAddModal;


