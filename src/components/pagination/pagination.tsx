import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type PaginationProps = {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
};

function Pagination({ productsPerPage, totalProducts, paginate, nextPage, prevPage, currentPage }: PaginationProps): JSX.Element {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className={currentPage === 1 ? 'pagination__item visually-hidden' : 'pagination__item'}>
          <Link
            className="pagination__link pagination__link--text"
            to={`${AppRoute.Catalog}/${ currentPage - 1 }`}
            onClick={() => paginate(currentPage)}
          >Назад
          </Link>
        </li>
        { pageNumbers.map((number) => (
          <li key={number}
            className="pagination__item"
          >
            <Link
              className={currentPage === number ? 'pagination__link pagination__link--active' : 'pagination__link'}
              to={`${AppRoute.Catalog}/${ number }`}
              onClick={() => paginate(number)}
            >
              {number}
            </Link>
          </li>
        ))}
        <li className={currentPage === totalPages ? 'pagination__item visually-hidden' : 'pagination__item'}>
          <Link
            className="pagination__link pagination__link--text"
            to={`${AppRoute.Catalog}/${ currentPage + 1 }`}
            onClick={() => paginate(currentPage)}
          >Далее
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
