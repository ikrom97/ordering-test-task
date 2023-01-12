import { products } from '../mock/products';
import { formatNumbers } from '../util';
import ProductCard from './ProductCard';

function SelectedProducts({ state, setState }) {
  const productsQuantity = state.selectedProducts
    .reduce((accumulator, item) => {
      if (item.isDeleted) {
        return accumulator;
      }
      return accumulator + item.quantity;
    }, 0);

  const productsPrice = state.selectedProducts
    .reduce((accumulator, item) => {
      const product = products.find((value) => value.id === item.productID);
      if (item.isDeleted) {
        return accumulator;
      }
      return accumulator + item.quantity * product.price;
    }, 0);

  return (
    <section className="selected-products">
      <h2 className="visually-hidden">Выбранные продукты</h2>
      <small className="selected-products__info title-2">
        {productsQuantity} товара на <br />
        сумму {formatNumbers(productsPrice)} <abbr title="Ruble">₽</abbr>
      </small>

      {state.selectedProducts.map((item) =>
        <ProductCard
          key={item.productID}
          productID={item.productID}
          state={state}
          setState={setState}
        />
      )}
    </section>
  );
}

export default SelectedProducts;
