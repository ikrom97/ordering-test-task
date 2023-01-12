function Payment() {
  return (
    <fieldset className="form__fieldset" data-area="payment">
      <legend className="form__legend title-2">Оплата</legend>

      <input className="visually-hidden"
        id="cash"
        type="radio"
        name="payment"
        defaultValue="Cash"
        defaultChecked
      />
      <label className="form__label form__label--radio" htmlFor="cash">Наличными курьеру</label>

      <input className="visually-hidden"
        id="card"
        type="radio"
        name="payment"
        defaultValue="Card"
      />
      <label className="form__label form__label--radio" htmlFor="card">Картой курьеру</label>

      <input className="visually-hidden"
        id="online"
        type="radio"
        name="payment"
        defaultValue="Online"
      />
      <label className="form__label form__label--radio" htmlFor="online">Картой онлайн</label>
    </fieldset>
  );
}

export default Payment;
