import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-router/history-router';
import AddReviewButton from './add-review-button';

describe('Component: AddReviewButton', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <AddReviewButton handleAddReviewButtonClick={function (): void {
            throw new Error('Function not implemented.');
          } }
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('add-review-button')).toBeInTheDocument();
  });
});
