import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { useAppSelector } from '../../../hooks';
import { selectOrdersInBasket } from '../../../store/basket-slice/selectors';

function HeaderBasket(): JSX.Element {
  const orders = useAppSelector(selectOrdersInBasket);
  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      <span className="header__basket-count">{orders === null ? 0 : orders.length}</span>
    </Link>
  );
}


export default HeaderBasket;
