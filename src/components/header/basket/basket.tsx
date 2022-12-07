import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';

function Basket(): JSX.Element {
  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      <span className="header__basket-count">3</span>
    </Link>
  );
}

export default Basket;
