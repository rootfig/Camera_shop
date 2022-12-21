import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCouponAction, postOrderAction } from '../../store/api-actions';
import { changeIsOrderPostStatus, setOrderPostCoupon } from '../../store/basket-slice/basket-slice';
import { selectDiscount, selectIsCouponLoaded, selectIsCouponLoadError, selectOrderPost } from '../../store/basket-slice/selectors';
import { Camera } from '../../types/camera';
import { calcTotalPrice } from '../../utils/utils';

type BasketSummaryProps = {
  orders: Camera[];
}
function BasketSummary({ orders }: BasketSummaryProps) {
  const dispatch = useAppDispatch();
  const coupon = useAppSelector(selectDiscount);
  const totalPrice = calcTotalPrice(orders);
  const [inputValue, setInputValue] = useState('');
  const discount = coupon / 100;
  const totalDiscount = totalPrice * discount;
  const isCouponLoadError = useAppSelector(selectIsCouponLoadError);
  const IsCouponLoaded = useAppSelector(selectIsCouponLoaded);
  const orderPost = useAppSelector(selectOrderPost);
  const isValidCoupon = (!isCouponLoadError && !IsCouponLoaded);
  const handleInputPromo = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value.replace(/^ +| \S* +$|() +/g, '$1'));
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
    dispatch(postOrderAction(orderPost));
    dispatch(changeIsOrderPostStatus(true));
  };
  // eslint-disable-next-line no-console
  console.log((!isCouponLoadError && !IsCouponLoaded));
  return (
    <div className="basket__summary">
      <div className="basket__promo">
        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
        <div className="basket-form">
          <form onSubmit={handleDiscountSubmit}>
            <div className="custom-input">
              <label><span className="custom-input__label">Промокод</span>
                <input type="text" name="promo" placeholder="Введите промокод" onChange={ handleInputPromo }/>
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
        <button disabled={orders === null || orders.length < 1} className="btn btn--purple" type="submit" onClick={ handlePostOrderClick }>Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default BasketSummary;
