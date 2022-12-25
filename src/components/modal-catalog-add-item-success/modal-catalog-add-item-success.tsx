import ReactFocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch } from '../../hooks';
import useKeydown from '../../hooks/use-keydown';
import { changeIsAddSuccessItemStatus } from '../../store/basket-slice/basket-slice';

type ModalCatalogAddItemSuccessProps = {
  isAddSuccessItemStatus: boolean;
}
function ModalCatalogAddItemSuccess({ isAddSuccessItemStatus }: ModalCatalogAddItemSuccessProps) {
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(changeIsAddSuccessItemStatus(false));
    document.body.style.overflow = 'scroll';
  };

  useKeydown('Escape', () => dispatch(changeIsAddSuccessItemStatus(false)));

  return (
    <ReactFocusLock>
      <div className={ isAddSuccessItemStatus ? 'modal is-active modal--narrow' : 'modal modal--narrow' }>
        <div className="modal__wrapper" data-testid='modal-catalog-add-item-success'>
          <div className="modal__overlay" onClick={() => dispatch(changeIsAddSuccessItemStatus(false))}></div>
          <div className="modal__content">
            <p className="title title--h4">Товар успешно добавлен в корзину</p>
            <svg className="modal__icon" width="86" height="80" aria-hidden="true">
              <use xlinkHref="#icon-success"></use>
            </svg>
            <div className="modal__buttons">
              <button
                className="btn btn--transparent modal__btn"
                onClick={handleCloseButtonClick}
              >Продолжить покупки
              </button>
              <Link
                className="btn btn--purple modal__btn modal__btn--fit-width"
                onClick={handleCloseButtonClick}
                to={AppRoute.Basket}
              >Перейти в корзину
              </Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleCloseButtonClick}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ReactFocusLock>
  );
}

export default ModalCatalogAddItemSuccess;
