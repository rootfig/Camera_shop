import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import Banner from './banner';

describe('Component: Banner', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Banner />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });
});
