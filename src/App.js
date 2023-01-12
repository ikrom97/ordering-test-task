import PageHeader from './components/PageHeader';
import OrderForm from './components/OrderForm';
import './assets/sass/style.scss';

function App() {
  return (
    <>
      <PageHeader />

      <main className="order-page container">
        <ul className="order-page__breadcrumbs breadcrumbs">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="blank.html">Главная</a>
          </li>

          <li className="breadcrumbs__item">Оформление заказа</li>
        </ul>

        <OrderForm className="order-page__form" />
      </main>
    </>
  );
}

export default App;
