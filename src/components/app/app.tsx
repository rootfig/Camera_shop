import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useAppSelector } from '../../hooks';
import BasketScreen from '../../pages/basket-screen/basket-screen';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import { selectIsLoadedError } from '../../store/cameras-slice/selectorts';


function App(): JSX.Element {
  const isErrorLoadedCameras = useAppSelector(selectIsLoadedError);

  if (isErrorLoadedCameras) {
    return <ErrorScreen />;
  }
  return (

    <Routes>
      <Route
        path={`${AppRoute.Catalog}/:id`}
        element={ <CatalogScreen /> }
      />
      <Route
        path={`${AppRoute.Product}/:id`}
        element={ <ProductScreen /> }
      />
      <Route
        path="*"
        element={ <NotFoundScreen /> }
      />
      <Route
        path={AppRoute.Basket}
        element={<BasketScreen />}
      />
    </Routes>

  );
}

export default App;
