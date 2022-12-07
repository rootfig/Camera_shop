import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import Basket from './basket/basket';
import FormSearch from './form-search/form-search';


function Header(): JSX.Element {
  return (
    <header className="header" id="header" data-testid='header'>
      <div className="container">
        <a className="header__logo" href={'/'} aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </a>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={`${AppRoute.Catalog}/1`}>Каталог</Link>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="/#">Гарантии</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="/#">Доставка</a>
            </li>
            <li className="main-nav__item"><a className="main-nav__link" href="/#">О компании</a>
            </li>
          </ul>
        </nav>
        <FormSearch />
        <Basket />
      </div>
    </header>
  );
}

export default Header;
