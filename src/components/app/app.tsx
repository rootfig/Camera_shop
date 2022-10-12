import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../constants';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ProductScreen from '../../pages/product-screen/product-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<Navigate replace to={`${AppRoute.Catalog}/1`} />} />
      <Route path={`${AppRoute.Catalog}/:id`} element={ <CatalogScreen /> }/>
      <Route path={`${AppRoute.Product}/:id`} element={ <ProductScreen /> }/>
      <Route path="*" element={ <NotFoundScreen /> }/>
    </Routes>
  );
}

export default App;
