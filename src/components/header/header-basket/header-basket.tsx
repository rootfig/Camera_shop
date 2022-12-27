import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { useAppSelector } from '../../../hooks';
import { selectOrdersInBasket } from '../../../store/basket-slice/selectors';

function HeaderBasket(): JSX.Element {
  const orders = useAppSelector(selectOrdersInBasket);
  const totalCount = orders.reduce((summ, {count}) => summ + count, 0);

  // eslint-disable-next-line no-console
  console.log(orders);
  return (
    <Link className="header__basket-link" to={AppRoute.Basket}>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-basket"></use>
      </svg>
      { (totalCount > 0 ) && <span className="header__basket-count">{ totalCount }</span> }

    </Link>
  );
}


export default HeaderBasket;
