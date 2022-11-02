import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../mocks/mock-store';
import { makeFakeCamera } from '../../mocks/moks';
import HistoryRouter from '../history-router/history-router';
import TabMenu from './tab-menu';


describe('Component: TabMenu', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <TabMenu camera={makeFakeCamera()} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('tab-menu')).toBeInTheDocument();
  });
});
