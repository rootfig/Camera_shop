import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../constants';
import { useAppSelector } from '../../../hooks';
import useKeydown from '../../../hooks/use-keydown';
import { selectCameras } from '../../../store/cameras-slice/selectorts';
import { Camera } from '../../../types/camera';


function FormSearch() {
  const cameras = useAppSelector(selectCameras);
  const [filtredCameras, setFiltredCameras] = useState<Camera[]>([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleInputFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = cameras.filter((value) => value.name.toLowerCase().includes(searchWord.toLocaleLowerCase()));

    searchWord === '' ? setFiltredCameras([]) : setFiltredCameras(newFilter);
  };

  const handleFormReset = () => {
    setFiltredCameras([]);
    setWordEntered('');
  };

  useKeydown('Escape', handleFormReset);

  return (
    <div className={wordEntered.length > 0 ? 'form-search list-opened' : 'form-search'}>
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            className="form-search__input"
            type="text" autoComplete="off"
            placeholder="Поиск по сайту"
            onChange={handleInputFilter}
            value={wordEntered}
          />
        </label>

        <ul className={wordEntered.length > 0 ? 'form-search__select-list scroller' : 'form-search__select-list'}>
          {filtredCameras.length > 0 ?
            filtredCameras.map((value) => (
              <li
                key={value.id}
                className="form-search__select-item"
                tabIndex={0}
              ><Link to={`${AppRoute.Product}/${value.id}`}>{value.name}</Link>
              </li>
            ))
            : <li className="form-search__select-item">Не найдено</li>}
        </ul>

      </form>
      <button
        className="form-search__reset"
        type="reset"
        onClick={handleFormReset}
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default FormSearch;
