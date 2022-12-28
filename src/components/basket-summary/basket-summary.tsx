import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCouponAction, postOrderAction } from '../../store/api-actions';
import { changeIsOrderPostStatus, setOrderPostCoupon } from '../../store/basket-slice/basket-slice';
import { selectDiscount, selectIsCouponLoaded, selectIsCouponLoadError, selectIsLoadedPostOrder, selectIsLoadErrorPostOrder, selectIsPostOrderDone } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';

type BasketSummaryProps = {
  orders: {
    camera: Camera;
    count: number;
    }[];
}

function BasketSummary({ orders }: BasketSummaryProps) {
  const dispatch = useAppDispatch();
  const coupon = useAppSelector(selectDiscount);
  const totalPrice = orders?.reduce((summ, {camera, count}) => summ + camera.price * count, 0);
  const [inputValue, setInputValue] = useState('');
  const discount = coupon / 100;
  const totalDiscount = totalPrice * discount;
  const isCouponLoadError = useAppSelector(selectIsCouponLoadError);
  const IsCouponLoaded = useAppSelector(selectIsCouponLoaded);
  const isValidCoupon = (!isCouponLoadError && !IsCouponLoaded);
  const isLoadedErrorOrderPost = useAppSelector(selectIsLoadErrorPostOrder);
  const isLoadedOrderPost = useAppSelector(selectIsLoadedPostOrder);
  const isPostOrderDone = useAppSelector(selectIsPostOrderDone);
  const isPostOrderFullfild = (!isLoadedErrorOrderPost && !isLoadedOrderPost && isPostOrderDone);
  const handleInputPromo = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleDiscountSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(postCouponAction(inputValue));
    dispatch(setOrderPostCoupon(inputValue));
    if(!isValidCoupon) {
      dispatch(setOrderPostCoupon(null));
    }
  };
  const handlePostOrderClick = () => {
    const ordersIds: number[] = [];
    orders.forEach((item) => {
      for (let i = 1; i <= item.count; i++) {
        ordersIds.push(item.camera.id);
      }
    });
    const order = {
      camerasIds: ordersIds,
      coupon: inputValue ? inputValue : null,
    };
    dispatch(postOrderAction(order));
    if( isPostOrderFullfild) {
      dispatch(changeIsOrderPostStatus(true));
    }
  };

  return (
    <div className="basket__summary" data-testid='basket-summary'>
      <div className="basket__promo">
        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
        <div className="basket-form">
          <form onSubmit={handleDiscountSubmit}>
            <div className="custom-input">
              <label><span className="custom-input__label">Промокод</span>
                <input type="text" name="promo" placeholder="Введите промокод" onChange={ handleInputPromo } pattern="[a-z,0-9,-]+" title="Убедитель что промокод верный"/>
              </label>
              { isCouponLoadError ? <p className="custom-input__error" >Промокод неверный</p> : null}
              { isValidCoupon ? <p className="custom-input__success" >Промокод принят!</p> : null}
            </div>
            <button className="btn" type="submit" >Применить
            </button>
          </form>
        </div>
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{ orders === null ? 0 : totalPrice.toLocaleString('ru-RU') } ₽</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className="basket__summary-value basket__summary-value--bonus">{ discount ? totalDiscount.toLocaleString('ru-RU') : 0} ₽</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{ (totalPrice - totalDiscount).toLocaleString('ru-RU') } ₽</span></p>
        <button disabled={orders === null || orders.length < 1 || totalPrice - totalDiscount === 0} className="btn btn--purple" type="submit" onClick={ handlePostOrderClick }>Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default BasketSummary;
