import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useKeydown from '../../../hooks/use-keydown';

type ReviewSuccessProps = {
  handleReviewSuccessButtonClick: () => void;
  isReviewSuccessOpen: boolean;
}
function ReviewSuccess({handleReviewSuccessButtonClick, isReviewSuccessOpen}: ReviewSuccessProps): JSX.Element {
  useKeydown('Escape', () => handleReviewSuccessButtonClick);

  const {
    register,
    setFocus,
  } = useForm({
    mode: 'onChange'
  });

  useEffect(() => {
    setFocus('modal__btn');
  }, [setFocus]);

  return (
    <div className={isReviewSuccessOpen ? 'modal is-active modal--narrow' : 'modal modal--narrow'} data-testid='review-success'>
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={handleReviewSuccessButtonClick}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">

            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              {...register('modal__btn')}
              onClick={handleReviewSuccessButtonClick}
            >Вернуться к покупкам
            </button>

          </div>

          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleReviewSuccessButtonClick}
            onBlur={() => setFocus('modal__btn')}
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

export default ReviewSuccess;
