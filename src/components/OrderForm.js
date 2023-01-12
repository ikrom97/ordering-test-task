import { useState } from 'react';
import { initialState } from '../const';
import Comment from './Comment';
import ContactDetails from './ContactDetails';
import OrderDetails from './OrderDetails';
import Payment from './Payment';
import SelectedProducts from './SelectedProducts';

function OrderForm({ className }) {
  const [state, setState] = useState(initialState);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    const products = state.selectedProducts
      .map((item) => {
        if (item.isDeleted) {
          return '';
        }
        const product = {...item};
        delete product.isDeleted;

        return product;
      });

    const formData = {
      products,
      contactDetails: {
        name: form.name.value,
        surname: form.surname.value,
        tel: form.tel.value,
        email: form.email.value,
        address: form.address.value,
      },
      payment: form.payment.value,
      comment: form.comment.value,
      warehouse: form.warehouse.checked,
      totalPrice: form.price.value,
    };

    console.log(formData);
  };

  return (
    <form className={`${className ? className : ''} form`}
      action="/"
      method="post"
      onSubmit={handleFormSubmit}
    >

      <div data-area="products">
        <h1 className="order-page__title title-1">Оформление заказа</h1>
        <p className="have-account">
          Есть аккаунт? <a className="login-link" href="blank.html">Войти</a>
        </p>

        <SelectedProducts state={state} setState={setState} />
      </div>

      <ContactDetails />

      <Payment />

      <Comment />

      <OrderDetails state={state} />
    </form>
  );
}

export default OrderForm;
