import { Review } from '../../../types/review';
import { humanizeCommentDate } from '../../../utils/utils';

type ReviewItemProps = {
  item: Review;
}
function ReviewItem({ item }: ReviewItemProps): JSX.Element {
  const {id, userName, rating, advantage, disadvantage, review, createAt} = item;
  return (
    <li className="review-card" key={id}>
      <div className="review-card__head">
        <p className="title title--h4">{ userName }</p>
        <time className="review-card__data" dateTime="2022-04-13">{humanizeCommentDate(createAt)}</time>
      </div>
      <div className="rate review-card__rate">
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
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <p className="visually-hidden">Оценка: { rating }</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{ advantage }</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{ disadvantage }</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{ review }</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewItem;
