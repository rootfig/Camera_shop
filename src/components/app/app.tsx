import { Navigate, Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute } from '../../constants';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import HistoryRouter from '../history-route/history-route';


function App(): JSX.Element {
  return (
    <HistoryRouter history={ browserHistory }>
      <Routes>
        <Route path={AppRoute.Main} element={<Navigate replace to={`${AppRoute.Catalog}/1`} />} />
        <Route path={`${AppRoute.Catalog}/:id`} element={ <CatalogScreen /> }/>
        <Route path={`${AppRoute.Product}/:id`} element={ <ProductScreen /> }/>
        <Route path="*" element={ <NotFoundScreen /> }/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
