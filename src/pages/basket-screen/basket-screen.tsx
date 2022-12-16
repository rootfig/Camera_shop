import { Helmet, HelmetProvider } from 'react-helmet-async';
import BasketItem from '../../components/basket-item/basket-item';
import BasketRemoveItem from '../../components/basket-remove-item/basket-remove-item';
import BasketSummary from '../../components/basket-summary/basket-summary';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsRemoveItemStatus, setItemInBasket } from '../../store/basket-slice/basket-slice';
import { selectIsRemoveItemStatus, selectOrderInGarbage, selectOrdersInBasket } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';

function BasketScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrdersInBasket);
  const removedItem = useAppSelector(selectOrderInGarbage);
  const isRemoveItemStatus = useAppSelector(selectIsRemoveItemStatus);

  const handleDeleteButtonClick = (order: Camera) => {
    const ordersAfterRemove = orders.filter((item) => item !== order);
    dispatch(setItemInBasket(ordersAfterRemove));
    const result = JSON.stringify(ordersAfterRemove);
    localStorage.setItem('order', result);
    dispatch(changeIsRemoveItemStatus(false));
  };

  return (
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Корзина - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>
        <Header />
        <main>
          <div className="page-content">
            <div className="breadcrumbs">
              <div className="container">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="index.html">Главная
                      <svg width="5" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="catalog.html">Каталог
                      <svg width="5" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="breadcrumbs__item"><span className="breadcrumbs__link breadcrumbs__link--active">Корзина</span>
                  </li>
                </ul>
              </div>
            </div>
            <section className="basket">
              <div className="container">
                <h1 className="title title--h2">Корзина</h1>
                <ul className="basket__list">
                  {orders.length !== 0 ? orders.map((order) =>
                    (
                      <BasketItem
                        key={order.id}
                        order={order}
                      />
                    )) : 'Корзина пуста'}
                </ul>
                <BasketSummary
                  orders={orders}
                />
              </div>
            </section>
          </div>
          <BasketRemoveItem
            removedItem={removedItem}
            isRemoveItemStatus={isRemoveItemStatus}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
        </main>
        <Footer />
      </div>
    </ HelmetProvider>
  );
}

export default BasketScreen;
