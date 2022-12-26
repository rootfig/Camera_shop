import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { useAppSelector } from '../../../hooks';
import { selectOrdersInBasket } from '../../../store/basket-slice/selectors';

function HeaderBasket(): JSX.Element {
  const orders = useAppSelector(selectOrdersInBasket);
  let ordersCount = 0;
  orders ? ordersCount = orders.length : ordersCount = 0;

  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      { (ordersCount > 0 ) && <span className="header__basket-count">{ ordersCount }</span> }

    </Link>
  );
}


export default HeaderBasket;
