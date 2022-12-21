import { useAppDispatch } from '../../hooks';
import useKeydown from '../../hooks/use-keydown';
import { changeIsRemoveItemStatus } from '../../store/basket-slice/basket-slice';
import { Camera } from '../../types/camera';

type BasketRemoveItemProps = {
  isRemoveItemStatus: boolean;
  removedItem: Camera;
  handleRemoveButtonClick: (order: Camera) => void;
}

function ModalBasketRemoveItem({ isRemoveItemStatus, removedItem, handleRemoveButtonClick }: BasketRemoveItemProps): JSX.Element {
  const { name, vendorCode, level, type, previewImg, category, previewImg2x, previewImgWebp, previewImgWebp2x } = removedItem;
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(changeIsRemoveItemStatus(false));
  };

  useKeydown('Escape', () => dispatch(changeIsRemoveItemStatus(false)));

  return (
    <div className={ isRemoveItemStatus ? 'modal is-active' : 'modal'}>
      <div className="modal__wrapper" data-testid='basket-remove-item'>
        <div className="modal__overlay" onClick={handleCloseButtonClick}></div>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
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
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--half-width"
              type="button"
              onClick={() => handleRemoveButtonClick(removedItem)}
            >Удалить
            </button>
            <button
              className="btn btn--transparent modal__btn modal__btn--half-width"
              onClick={handleCloseButtonClick}
            >Продолжить покупки
            </button>
          </div>
          <button
            className="cross-btn"
            type="button" aria-label="Закрыть попап"
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

export default ModalBasketRemoveItem;


