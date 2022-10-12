import { Route, Routes } from 'react-router-dom';
import { AppRoute, RouteName } from '../../constants';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ProductScreen from '../../pages/product-screen/product-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Cameras} element={ <CatalogScreen /> }/>
      <Route path={RouteName.CamerasDetailed.path} element={ <ProductScreen /> }/>
      <Route path="*" element={ <NotFoundScreen /> }/>
    </Routes>
  );
}

export default App;
