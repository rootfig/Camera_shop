import {useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';


import {changeIsFilterReset} from '../../store/cameras-slice/cameras-slice';
import {FILTER_PARAM} from '../../constants';
import CatalogFilterPrice from './catalog-filter-price/catalog-filter-price';
import CatalogFilterCheckbox from './catalog-filter-checkbox/catalog-filter-checkbox';

function CatalogFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleResetBtnClick = () => {
    const newSearchParams = Array.from(searchParams.entries()).filter(([key]) => !FILTER_PARAM.includes(key));
    dispatch(changeIsFilterReset(true));
    setSearchParams(newSearchParams);
  };

  return (
    <div className="catalog__aside">
      <div className="catalog-filter" data-testid='catalog-filter'>
        <form action="#">
          <h2 className="visually-hidden">Фильтр</h2>
          <CatalogFilterPrice />
          <CatalogFilterCheckbox />
          <button
            className="btn catalog-filter__reset-btn"
            type="reset"
            onClick={handleResetBtnClick}
          >
          Сбросить фильтры
          </button>
        </form>
      </div>
    </div>
  );
}

export default CatalogFilter;
