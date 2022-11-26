import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';

type PaginationProps = {
  currentPage: number;
  setActivePage: (_arg: number) => void;
  totalPages: number;
}

function Pagination({currentPage, totalPages, setActivePage } : PaginationProps): JSX.Element {

  return(
    <div className="pagination" data-testid='pagination'>
      <ul className="pagination__list">
        {currentPage !== 1 &&
        <li className={currentPage === 1 ? 'pagination__item visually-hidden' : 'pagination__item'}>
          <Link
            className="pagination__link pagination__link--text"
            to={`${AppRoute.Catalog}/${currentPage - 1}`}
            onClick={() => setActivePage(currentPage - 1)}
          >Назад
          </Link>
        </li>}
        {Array.from({length: totalPages}, (_value, index) => (
          <li className="pagination__item" key={index}>
            <Link
              className={currentPage === index + 1 ? 'pagination__link pagination__link--active' : 'pagination__link'}
              to={`${AppRoute.Catalog}/${index + 1}`}
              onClick={() => setActivePage(index + 1)}
            >{index + 1}
            </Link>
          </li>
        ))}
        {currentPage !== totalPages &&
        <li className={currentPage === totalPages ? 'pagination__item visually-hidden' : 'pagination__item'}>
          <Link
            className="pagination__link pagination__link--text"
            to={`${AppRoute.Catalog}/${currentPage + 1}`}
            onClick={() => setActivePage(currentPage + 1)}
          >Далее
          </Link>
        </li>}
      </ul>
    </div>
  );
}

export default Pagination;
