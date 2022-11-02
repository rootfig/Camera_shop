import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-route/history-route';
import AddReviewButton from './add-review-button';

describe('Component: AddReviewButton', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewButton/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('add-review-button')).toBeInTheDocument();
  });
});
