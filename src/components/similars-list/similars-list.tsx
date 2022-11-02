import { useState } from 'react';
import { SLIDER_STEP_COUNT } from '../../constants';
import { useAppSelector } from '../../hooks';
import { selectSimilar } from '../../store/similar-slice/selectors';
import SimilarItem from '../similar-item/similar-item';

function SimilarList(): JSX.Element {
  const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(0) ;
  const indexOfLastProduct = indexOfFirstProduct + SLIDER_STEP_COUNT;
  const similars = useAppSelector(selectSimilar);
  const currentList = similars.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePrevButtonClick = () => {
    setIndexOfFirstProduct(indexOfFirstProduct - 1);
  };

  const handleNextButtonClick = () => {
    setIndexOfFirstProduct(indexOfFirstProduct + 1);

  };
  return (
    <div className="page-content__section" data-testid='similar-list'>
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {currentList.map((similar) =>
                (
                  <SimilarItem
                    key={similar.id}
                    similar={similar}
                  />
                ))}

            </div>
            <button
              className="slider-controls slider-controls--prev"
              type="button"
              aria-label="Предыдущий слайд"
              onClick={ handlePrevButtonClick }
              disabled={indexOfFirstProduct === 0}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
            <button
              className="slider-controls slider-controls--next"
              type="button"
              aria-label="Следующий слайд"
              onClick={ handleNextButtonClick }
              disabled={indexOfFirstProduct === similars.length - SLIDER_STEP_COUNT}
            >
              <svg width="7" height="12" aria-hidden="true">
                <use xlinkHref="#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SimilarList;
