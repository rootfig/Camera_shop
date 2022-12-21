import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import HistoryRouter from '../../history-router/history-router';
import FormSearch from './form-search';

describe('Component: FormSearch', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FormSearch />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('form-search')).toBeInTheDocument();
  });
});
