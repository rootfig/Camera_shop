import { Route, Routes } from 'react-router-dom';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={ <CatalogScreen /> }/>
      <Route path="*" element={ <NotFoundScreen /> }/>
    </Routes>
  );
}

export default App;
