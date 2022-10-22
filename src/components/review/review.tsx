import { useState } from 'react';
import ReviewForm from './review-form/review-form';
// import AddReviewButton from './add-review-button/add-review-button';
import MoreReviewButton from './more-review-button/more-review-button';
import ReviewList from './review-list/review-list';

function Review(): JSX.Element {
  const [isAddReviewModalOpen, setIsAddReviewModalOpen] = useState(false);

  const handleAddReviewButtonClick = () => {
    setIsAddReviewModalOpen(true);
  };

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
          <ReviewList />
          <MoreReviewButton />
        </div>
      </section>
      { isAddReviewModalOpen &&
        <ReviewForm
          setActive={ setIsAddReviewModalOpen }
        />}
    </div>
  );
}

export default Review;
