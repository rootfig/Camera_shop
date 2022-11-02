import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../mocks/mock-store';
import CatalogScreen from './catalog-screen';

describe('Сorrectly render СatalogScreen', () => {
  it('Render component', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <CatalogScreen />
        </Provider>
      </HistoryRouter>,
    );
    const titleElement = screen.getByText(/Каталог фото- и видеотехники/i);
    expect(titleElement).toBeInTheDocument();
  });
});
