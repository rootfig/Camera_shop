import {render, screen} from '@testing-library/react';
import ErrorScreen from '../../pages/error-screen/error-screen';


describe('Application Routing', () => {
  it('Catalog list renders', () => {
    render(<ErrorScreen/>);

    expect(screen.getByText('Sorry!')).toBeInTheDocument();
  });
});
