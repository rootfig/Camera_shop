import { Review } from '../../types/review';
import MoreReviewButton from './more-review-button/more-review-button';
import ReviewItem from './review-item/review-item';

type ReviewProps = {
  handleAddReviewButtonClick: () => void;
  reviews: Review[];
  onChangeReviewsListCount: (count: number) => void;
  reviewsListCount: number;
}
function Reviews({reviews, reviewsListCount, handleAddReviewButtonClick, onChangeReviewsListCount}: ReviewProps): JSX.Element {

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button
              className="btn"
              type="button"
              onClick={() => handleAddReviewButtonClick()}
            >Оставить свой отзыв
            </button>
          </div>
          <ul className="review-block__list">
            {reviews.map((review) =>
              (
                <ReviewItem key={ review.id } item={ review } />
              ))}
          </ul>
          {
            reviews.length >= reviewsListCount &&
             <MoreReviewButton
               onChangeReviewsListCount={onChangeReviewsListCount}
               reviewsListCount={reviewsListCount}
             />
          }
        </div>
      </section>
    </div>
  );
}

export default Reviews;
