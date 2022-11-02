import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../../mocks/mock-store';
import HistoryRouter from '../../history-route/history-route';
import ReviewSuccess from './review-success';

describe('Component: ReviewSuccess', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewSuccess handleReviewSuccessButtonClick={function (): void {
            throw new Error('Function not implemented.');
          } } isReviewSuccessOpen={false}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-success')).toBeInTheDocument();
  });
});
