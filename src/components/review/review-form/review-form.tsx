import { FormEvent, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MIN_REVIEW_LENGTH, RatingTitle, RATING_VALUES } from '../../../constants';
import { useAppDispatch } from '../../../hooks';
import useKeydown from '../../../hooks/use-keydown';
import { fetchReviewsAction, postReviewAction } from '../../../store/api-actions';
import { ReviewPost } from '../../../types/review-post';

type ReviewFormProps = {
  setActive: (value: boolean) => void;
  cameraId: number;
}

function ReviewForm({ setActive, cameraId }: ReviewFormProps): JSX.Element {
  useKeydown('Escape', () => setActive(false));
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(0);

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<ReviewPost>({
    mode: 'onChange'
  });

  const handleSubmitForm = handleSubmit((review) => {
    const reviewData = {
      ...review,
      cameraId,
      rating: Number(review.rating),

    };
    dispatch(postReviewAction(reviewData));
    setActive(false);
  });

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchReviewsAction(cameraId));
    handleSubmitForm(evt);
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={() => setActive(false)}></div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" onSubmit={onSubmit}>
              <div className="form-review__rate">
                <fieldset className={errors.rating ? 'rate form-review__item is-invalid' : 'rate form-review__item'}>
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {RATING_VALUES.map((index) => (
                        <Fragment key={`star-${index}`}>
                          <input
                            className="visually-hidden"
                            id={`star-${index}`}
                            type="radio"
                            {...register('rating', {required: true})}
                            value={index}
                            onChange={() => setRating(rating)}
                          />
                          <label className="rate__label" htmlFor={`star-${index}`} title={RatingTitle[index]}></label>
                        </Fragment>
                      ))}
                    </div>
                    <div className="rate__progress"><span className="rate__stars">0</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className={errors.userName ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Введите ваше имя"
                      {...register('userName', {
                        required: true
                      })}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className={errors.advantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Основные преимущества товара"
                      {...register('advantage', {
                        required: true
                      })}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className={errors.disadvantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Главные недостатки товара"
                      {...register('disadvantage', {
                        required: true
                      })}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className={errors.review ? 'custom-textarea form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      placeholder="Поделитесь своим опытом покупки"
                      {...register('review', {
                        required: true,
                        minLength: {
                          value: MIN_REVIEW_LENGTH,
                          message: `Нужно не менее ${MIN_REVIEW_LENGTH} символов`
                        },
                      })}
                    >
                    </textarea>
                  </label>
                  {errors.review &&
                    <div className="custom-textarea__error">
                      {errors.review.message ? errors.review.message : 'Нужно добавить комментарий'}
                    </div>}
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => setActive(false)}>
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
