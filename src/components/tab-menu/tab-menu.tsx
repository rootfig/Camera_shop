import { useState } from 'react';
import { Camera } from '../../types/camera';

type TabMenuProps = {
  camera: Camera;
}

function TabMenu({camera}: TabMenuProps): JSX.Element {

  const { vendorCode, category, type, level, description } = camera;

  const [toggleState, setToggleState] = useState('description');

  const toggleTab = (index: string) => {
    setToggleState(index);
  };
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button
          className={ toggleState === 'characteristics' ? 'tabs__control is-active' : 'tabs__control' }
          type="button"
          onClick={() => toggleTab('characteristics')}
        >Характеристики
        </button>
        <button
          className={ toggleState === 'description' ? 'tabs__control is-active' : 'tabs__control' }
          type="button"
          onClick={() => toggleTab('description')}
        >Описание
        </button>
      </div>
      <div className="tabs__content">
        <div className={ toggleState === 'characteristics' ? 'tabs__element is-active' : 'tabs__element'}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text"> { vendorCode }</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{ category }</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{ type }</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{ level }</p>
            </li>
          </ul>
        </div>
        <div className={ toggleState === 'description' ? 'tabs__element is-active' : 'tabs__element'}>
          <div className="product__tabs-text">
            <p>{ description }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabMenu;
