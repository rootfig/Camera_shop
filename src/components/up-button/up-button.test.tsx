import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import HistoryRouter from '../history-router/history-router';
import UpButton from './up-button';


describe('Component: UpButton', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <UpButton />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('up-button')).toBeInTheDocument();
  });
});
