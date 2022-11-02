import { Helmet, HelmetProvider } from 'react-helmet-async';

function ErrorScreen(): JSX.Element {
  return(
    <HelmetProvider>
      <div className="wrapper">
        <Helmet>
          <title>Error - Фотошоп</title>
          <meta name="description" content="Фотошоп — Интернет-магазин фото- и видеотехники" />
        </Helmet>

        <div className="error-message" style={{marginLeft: 'auto', marginRight: 'auto'}} data-testid='error-screen'>
          <h1>Sorry!</h1>
          <h3>server is not available</h3>
          <h5>try to come back later</h5>
        </div>

      </div>


    </HelmetProvider>
  );
}

export default ErrorScreen;
