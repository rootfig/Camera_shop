import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { selectSimilar } from '../../store/similar-slice/selectors';
import SimilarItem from '../similar-item/similar-item';

function SimilarList(): JSX.Element {
  const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(0) ;
  const indexOfLastProduct = indexOfFirstProduct + 3;
  const similars = useAppSelector(selectSimilar);
  const currentList = similars.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="page-content__section">
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
              onClick={() => setIndexOfFirstProduct(indexOfFirstProduct - 1)}
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
              onClick={() => setIndexOfFirstProduct(indexOfFirstProduct + 1)}
              disabled={indexOfFirstProduct === similars.length - 3}
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
