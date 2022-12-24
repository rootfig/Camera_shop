import { Review } from '../../types/review';
import AddReviewButton from './add-review-button/add-review-button';
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
    <div className="page-content__section" data-testid='review'>
      <section className="review-block">
        <div className="container">
          <AddReviewButton
            handleAddReviewButtonClick={handleAddReviewButtonClick}
          />
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
