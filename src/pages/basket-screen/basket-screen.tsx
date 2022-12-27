import { Helmet, HelmetProvider } from 'react-helmet-async';
import BasketItem from '../../components/basket-item/basket-item';
import ModalBasketRemoveItem from '../../components/modal-basket-remove-item/modal-basket-remove-item';
import BasketSummary from '../../components/basket-summary/basket-summary';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeIsRemoveItemStatus, setItemsInBasket } from '../../store/basket-slice/basket-slice';
import { selectIsRemoveItemStatus, selectOrderInGarbage, selectOrdersInBasket } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';
import { useEffect } from 'react';
import ModalBasketSuccess from '../../components/modal-basket-success/modal-basket-success';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';


function BasketScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrdersInBasket);
  const removedItem = useAppSelector(selectOrderInGarbage);
  const isRemoveItemStatus = useAppSelector(selectIsRemoveItemStatus);

  const handleRemoveButtonClick = (order: Camera) => {
    const ordersAfterRemove = orders.filter((item) => item.camera !== order);
    dispatch(setItemsInBasket(ordersAfterRemove));
    dispatch(changeIsRemoveItemStatus(false));
    document.body.style.overflow = 'scroll';
  };

  useEffect(() => {
    if (orders) {
      const result = JSON.stringify(orders);
      localStorage.setItem('order', result);
    }
  },[dispatch, orders]);

  return (
    <HelmetProvider>
      <div className="wrapper" data-testid='basket-screen'>
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
                    <Link className="breadcrumbs__link" to={AppRoute.Main}>Главная
                      <svg width="5" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini"></use>
                      </svg>
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link className="breadcrumbs__link" to={`${AppRoute.Catalog}/1`}>Каталог
                      <svg width="5" height="8" aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini"></use>
                      </svg>
                    </Link>
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
                  {(orders !== null && orders !== undefined) ? orders?.map(({camera, count}) =>
                    (
                      <BasketItem
                        key={`basket-item-${camera.id}`}
                        camera={camera}
                        count={count}
                      />
                    )) : 'Корзина пуста'}
                </ul>
                <BasketSummary
                  orders={orders}
                />
              </div>
            </section>
          </div>
          <ModalBasketRemoveItem
            removedItem={removedItem}
            isRemoveItemStatus={isRemoveItemStatus}
            handleRemoveButtonClick={handleRemoveButtonClick}
          />
          <ModalBasketSuccess />
        </main>
        <Footer />
      </div>
    </ HelmetProvider>
  );
}

export default BasketScreen;
