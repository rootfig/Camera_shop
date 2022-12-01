import {useState, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import { QueryParams } from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import { changeIsFilterReset } from '../../../store/cameras-slice/cameras-slice';

import { getIsFilterReset, selectPriceProducts } from '../../../store/cameras-slice/selectorts';

function CatalogFilterPrice(): JSX.Element {
  const dispatch = useAppDispatch();
  const priceProducts = useAppSelector(selectPriceProducts);
  const isFilterReset = useAppSelector(getIsFilterReset);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentInputPrice, setCurrentInputPrice] = useState<{minPrice: null | number; maxPrice: null | number}>({
    minPrice: Number(searchParams.get(QueryParams.PriceMin)) ? Number(searchParams.get(QueryParams.PriceMin)) : null,
    maxPrice: Number(searchParams.get(QueryParams.PriceMax)) ? Number(searchParams.get(QueryParams.PriceMax)) : null,
  });
  const [isUpdatePrice, setIsUpdatePrice] = useState(false);

  useEffect(() => {
    if(isUpdatePrice) {
      if(currentInputPrice.minPrice) {
        searchParams.set(QueryParams.PriceMin, String(currentInputPrice.minPrice));
      }
      if(currentInputPrice.maxPrice) {
        searchParams.set(QueryParams.PriceMax, String(currentInputPrice.maxPrice));
      }
      setIsUpdatePrice(false);
      setSearchParams(searchParams);
    }
  }, [isUpdatePrice, currentInputPrice, priceProducts, searchParams, setSearchParams]);

  useEffect(() => {
    if(isFilterReset) {
      setCurrentInputPrice({minPrice: null, maxPrice: null});
      dispatch(changeIsFilterReset(false));
    }

    const changeRangePrice = setTimeout(() => {
      if(currentInputPrice.minPrice !== null && currentInputPrice.maxPrice !== null) {
        if(currentInputPrice.minPrice > currentInputPrice.maxPrice) {
          setCurrentInputPrice({...currentInputPrice, maxPrice: currentInputPrice.minPrice});
        }
      }

      if(currentInputPrice.minPrice !== null) {
        if(currentInputPrice.minPrice < priceProducts.minPrice) {
          setCurrentInputPrice({...currentInputPrice, minPrice: priceProducts.minPrice});
        }
        if(currentInputPrice.minPrice > priceProducts.maxPrice) {
          setCurrentInputPrice({...currentInputPrice, minPrice: priceProducts.maxPrice});
        }
      }

      if(currentInputPrice.maxPrice !== null) {
        if(currentInputPrice.maxPrice > priceProducts.maxPrice) {
          setCurrentInputPrice({...currentInputPrice, maxPrice: priceProducts.maxPrice});
        }
        if(currentInputPrice.maxPrice < priceProducts.minPrice && currentInputPrice.minPrice === null) {
          setCurrentInputPrice({...currentInputPrice, maxPrice: priceProducts.minPrice});
        }
      }

      if(currentInputPrice.minPrice !== null || currentInputPrice.maxPrice !== null) {
        setIsUpdatePrice(true);
      }

    }, 1000);

    return () => clearTimeout(changeRangePrice);
  }, [currentInputPrice, priceProducts, isFilterReset, dispatch]);

  return(
    <fieldset className="catalog-filter__block" data-testid='catalog-filter-price'>
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name={QueryParams.PriceMin}
              placeholder={String(priceProducts.minPrice)}
              value={currentInputPrice.minPrice !== null ? currentInputPrice.minPrice : '' }
              onChange={(evt) => setCurrentInputPrice({...currentInputPrice, minPrice: Number(evt.target.value)})}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name={QueryParams.PriceMax}
              placeholder={String(priceProducts.maxPrice)}
              value={currentInputPrice.maxPrice !== null ? currentInputPrice.maxPrice : '' }
              onChange={(evt) => setCurrentInputPrice({...currentInputPrice, maxPrice: Number(evt.target.value)})}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default CatalogFilterPrice;
