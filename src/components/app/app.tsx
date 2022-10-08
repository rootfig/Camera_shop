import { Route, Routes } from 'react-router-dom';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={ <CatalogScreen /> }/>
    </Routes>
  );
}

export default App;
