import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsOrderPostStatus } from '../../store/basket-slice/basket-slice';
import { selectIsOrderPostStatus } from '../../store/basket-slice/selectors';

function ModalBasketSuccess() {
  const isOrderPostStatus = useAppSelector(selectIsOrderPostStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => {
    dispatch(changeIsOrderPostStatus(false));
  };

  const handleButtonClick = () => {
    navigate(`${AppRoute.Catalog}/1`);
    dispatch(changeIsOrderPostStatus(false));
  };

  return (
    <div className={ isOrderPostStatus ? 'modal is-active modal--narrow' : 'modal modal--narrow'}>
      <div className="modal__wrapper" data-testid='modal-basket-success'>
        <div className="modal__overlay" onClick={handleCloseButtonClick}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={handleButtonClick}>Вернуться к покупкам
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleCloseButtonClick}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalBasketSuccess;
