import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import ErrorScreen from '../../pages/error-screen/error-screen';
import HistoryRouter from '../history-route/history-route';
import App from './app';

const history = createMemoryHistory();
const fakeApp = (

  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>

);

describe('Application Errors', () => {
  it('render NotFoundScreen', () => {

    render(fakeApp);

    expect(screen.getByText(/Страница не найдена/i)).toBeInTheDocument();
  });

  it('render ErrorScreen', () => {
    render(<ErrorScreen/>);

    expect(screen.getByText('Sorry!')).toBeInTheDocument();
  });

  it ('render CatalogScreen', () => {
    history.push('/catalog/1');
    render(fakeApp);
    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it ('render ProductScreen', () => {
    history.push('/product/1');
    render(fakeApp);
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
  });
});

