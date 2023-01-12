import { useEffect, useState } from 'react';
import { deliveryFee, promoCode } from '../const';
import { products } from '../mock/products';
import { formatNumbers } from '../util';

function OrderDetails({ state }) {
  const firstPrice = state.selectedProducts
    .reduce((accumulator, item) => {
      const product = products.find((value) => value.id === item.productID);
      if (item.isDeleted) {
        return accumulator;
      }
      return accumulator + item.quantity * product.price;
    }, 0);

  const stock = state.selectedProducts
    .reduce((accumulator, item) => {
      const product = products.find((value) => value.id === item.productID);
      if (item.isDeleted) {
        return accumulator;
      }
      return accumulator + item.quantity * product.stock;
    }, 0);

  const discount = stock + promoCode.discount;
  const [lastPrice, setLastPrice] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    setLastPrice(firstPrice - stock + deliveryFee);
  }, [firstPrice, stock]);

  const handlePromocodeApplyClick = (evt) => {
    if (evt.target.previousElementSibling.value === promoCode.code) {
      !promoCode.isApplied && setLastPrice(lastPrice - promoCode.discount);
      promoCode.isApplied = true;
      setSuccess(`${promoCode.code} - купон применен`);
      error && setError(null);
      evt.target.previousElementSibling.value = '';
      evt.target.previousElementSibling.disabled = true;
      return;
    }

    setError(`${promoCode.code} - купон не найден`);
    success && setSuccess(null);
    evt.target.previousElementSibling.value = '';
  };

  const handleInputChange = () => {
    setError(null);
    setSuccess(null);
  };

  if (!firstPrice) {
    return <></>;
  }

  return (
    <aside className="order">
      <dl className="order__details">
        <div className="order__detail">
          <dt className="order__detail-term">Товары</dt>
          <dd className="order__detail-description">
            {formatNumbers(firstPrice)} <abbr title="Ruble">₽</abbr>
          </dd>
        </div>
        <div className="order__detail">
          <dt className="order__detail-term">Скидка</dt>
          <dd className="order__detail-description order__detail-description--error">
            -{formatNumbers(discount)} <abbr title="Ruble">₽</abbr>
          </dd>
        </div>
        <div className="order__detail order__detail--small">
          <dt className="order__detail-term">Акции</dt>
          <dd className="order__detail-description order__detail-description--error">
            -{formatNumbers(stock)} <abbr title="Ruble">₽</abbr>
          </dd>
        </div>
        <div className="order__detail order__detail--small">
          <dt className="order__detail-term">Промокод</dt>
          <dd className="order__detail-description order__detail-description--error">
            -{formatNumbers(promoCode.discount)} <abbr title="Ruble">₽</abbr>
          </dd>
        </div>
        <div className="order__detail">
          <dt className="order__detail-term">Доставка</dt>
          <dd className="order__detail-description">
            {deliveryFee} <abbr title="Ruble">₽</abbr>
          </dd>
        </div>
      </dl>

      <div className="form__element form__element--warehouse">
        <label className="form__label form__label--warehouse">
          Получить товар со склада
          <input className="visually-hidden" type="checkbox" name="warehouse" />
          <span className="form__checkbox-icon" />
        </label>
        <p className="form__field-info">Сроки получения могут измениться</p>
      </div>

      <p className="order__total">
        Итого: <span>{formatNumbers(lastPrice)} <abbr title="Ruble">₽</abbr></span>
      </p>
      <input type="hidden" name="price" value={lastPrice} />


      <div className="form__element form__element--promocode">
        {error &&
          <span className="form__validation form__validation--error">{error}</span>}
        {success &&
          <span className="form__validation form__validation--success">{success}</span>}
        <input className="form__field form__field--promocode"
          type="text"
          name="promocode"
          placeholder="Введите промокод"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button className="form__promocode-apply"
          type="button"
          onClick={handlePromocodeApplyClick}
        >
          Применить
        </button>
      </div>

      <button className="form__submit" type="submit">Оформить заказ</button>
      <p className="form__privacy-policy">
        Нажимая кнопку “Оформить заказ”, Вы соглашаетесь с <a className="form__privacy-policy-link" href="blank.html">политикой конфиденциальности</a>.
      </p>
    </aside>
  );
}

export default OrderDetails;
