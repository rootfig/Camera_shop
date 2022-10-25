import { REVIEWS_COUNT } from '../../../constants';

type MoreReviewButtonProps = {
  onChangeShowCount: (count: number) => void;
  showCount: number;
}

function MoreReviewButton({ onChangeShowCount, showCount }: MoreReviewButtonProps): JSX.Element {
  return (
    <div className="review-block__buttons">
      <button
        className="btn btn--purple"
        type="button"
        onClick={() => onChangeShowCount(showCount + REVIEWS_COUNT)}
      >
        Показать больше отзывов
      </button>
    </div>
  );
}

export default MoreReviewButton;
