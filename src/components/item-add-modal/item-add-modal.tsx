import { useAppDispatch } from '../../hooks';
import useKeydown from '../../hooks/use-keydown';
import { changeIsAddItemStatus } from '../../store/cameras-slice/cameras-slice';
import { Camera } from '../../types/camera';

type ItemAddModalType = {
  isAddItemStatus: boolean;
  buyedCamera: Camera;
  handleBuyButtonClick: () => void;
}

function ItemAddModal({ isAddItemStatus, buyedCamera, handleBuyButtonClick }: ItemAddModalType): JSX.Element {
  const {name, category, vendorCode, type, level, previewImgWebp, price, previewImgWebp2x, previewImg, previewImg2x} = buyedCamera;
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(changeIsAddItemStatus(false));
  };
  useKeydown('Escape', () => dispatch(changeIsAddItemStatus(false)));
  return (
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
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleBuyButtonClick}>
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
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemAddModal;


