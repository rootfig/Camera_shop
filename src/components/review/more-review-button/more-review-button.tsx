import { REVIEWS_COUNT } from '../../../constants';

type MoreReviewButtonProps = {
  onChangeReviewsListCount: (count: number) => void;
  reviewsListCount: number;
}

function MoreReviewButton({ onChangeReviewsListCount, reviewsListCount }: MoreReviewButtonProps): JSX.Element {
  return (
    <div className="review-block__buttons" data-testid='more-review-button'>
      <button
        className="btn btn--purple"
        type="button"
        onClick={() => onChangeReviewsListCount(reviewsListCount + REVIEWS_COUNT)}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}

export default MoreReviewButton;
