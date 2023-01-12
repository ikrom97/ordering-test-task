import { useState } from 'react';
import { sizes } from '../const';
import { products } from '../mock/products';
import { formatNumbers } from '../util';
import ProductDialog from './ProductDialog';

function ProductCard({ productID, state, setState }) {
  const product = products.find((item) => item.id === productID);
  const selectedProduct = state.selectedProducts
    .find((item) => item.productID === productID);
  const size = selectedProduct.size;
  const [color, setColor] = useState(selectedProduct.color);

  const handleSizeButtonClick = (size) =>
    () => selectedProduct.size = size;

  const handleColorButtonClick = (color) =>
    () => selectedProduct.color = color && setColor(color);

  const handleDecrementButtonClick = () => {
    selectedProduct.quantity -= 1;
    setState({ ...state });
  };

  const handleIncrementButtonClick = () => {
    selectedProduct.quantity += 1;
    setState({ ...state });
  };

  const handleDeleteClick = () => {
    selectedProduct.isDeleted = true;
    setState({ ...state });
  };

  if (selectedProduct.isDeleted) {
    return <ProductDialog product={product} state={state} setState={setState} />
  }

  return (
    <figure className="product-card">
      <figcaption className="product-card__title">{product.title}</figcaption>

      <picture className="product-card__image">
        <source media="(min-width:992px)" srcSet={`img/${product.slug}-desktop-${color.name}.webp`} />
        <source media="(min-width:992px)" srcSet={`img/${product.slug}-desktop-${color.name}.jpg`} />
        <source srcSet={`img/${product.slug}-mobile-${color.name}.webp`} type="image/webp" />
        <source srcSet={`img/${product.slug}-mobile-${color.name}.jpg`} type="image/jpg" />
        <img src={`img/${product.slug}-mobile-${color.name}.webp`}
          width={90}
          height={111}
          alt={product.alternativeText}
          loading="lazy"
        />
      </picture>

      <dl className="product-card__info">
        <dt className="product-card__info-term">Артикул</dt>
        <dd className="product-card__info-description">{product.vendorCode}</dd>
        <dt className="product-card__info-term">Сезон</dt>
        <dd className="product-card__info-description">{product.season}</dd>
      </dl>

      <ul className="product-card__sizes">
        {sizes.map((item) =>
          <li key={item} className="product-card__size">
            <label className="product-card__size-button"
              onClick={handleSizeButtonClick(item)}
            >
              <input className="visually-hidden"
                type="radio"
                name={`${product.slug}-size`}
                defaultValue={item}
                defaultChecked={item === size}
                disabled={!product.availableSizes.includes(item)}
              />
              <abbr className="product-card__size-label" title="Extra Small">{item}</abbr>
            </label>
          </li>
        )}
      </ul>

      <ul className="product-card__colors">
        {product.availableColors.map((item) =>
          <li key={item.name} className="product-card__color">
            <label className="product-card__color-button"
              onClick={handleColorButtonClick(item)}
            >
              <input className="visually-hidden"
                type="radio"
                name={`${product.slug}-color`}
                defaultValue={item.name}
                defaultChecked={item.name === color.name}
              />
              <data className="product-card__color-label"
                value={item.code}
                style={{ backgroundColor: item.code }}
              >
                {item.name}
              </data>
            </label>
          </li>
        )}
      </ul>

      <div className="product-card__count">
        <var className="product-card__price">
          {product.stock
            ?
            <>
              <del>{formatNumbers(product.price)} <abbr title="Ruble">₽</abbr></del>
              <ins>{formatNumbers(product.price - product.stock)} <abbr title="Ruble">₽</abbr></ins>
            </>
            :
            <>{formatNumbers(product.price)} <abbr title="Ruble">₽</abbr></>
          }
        </var>

        <div className="product-card__count-control">
          <button className="product-card__count-button"
            aria-label="Вычесть"
            type="button"
            onClick={handleDecrementButtonClick}
            disabled={selectedProduct.quantity === 1}
          >
            <svg width={14} height={14}>
              <use xlinkHref="img/sprite.svg#subtract" />
            </svg>
          </button>
          <output className="product-card__quantity">{selectedProduct.quantity}</output>
          <button className="product-card__count-button"
            aria-label="Добавить"
            type="button"
            onClick={handleIncrementButtonClick}
          >
            <svg width={14} height={14}>
              <use xlinkHref="img/sprite.svg#add" />
            </svg>
          </button>
        </div>

        <var className="product-card__price">
          {product.stock
            ?
            <>
              <del>
                {formatNumbers(product.price * selectedProduct.quantity)} <abbr title="Ruble">₽</abbr>
              </del>
              <ins>
                {formatNumbers((product.price - product.stock) * selectedProduct.quantity)} <abbr title="Ruble">₽</abbr>
              </ins>
            </>
            :
            <>
              {formatNumbers(product.price * selectedProduct.quantity)} <abbr title="Ruble">₽</abbr>
            </>
          }
        </var>
      </div>
      <button className="product-card__remove"
        title="Удалить из корзины"
        type="button"
        onClick={handleDeleteClick}
      >
        <svg width={16} height={16}>
          <use xlinkHref="img/sprite.svg#close" />
        </svg>
      </button>
    </figure>
  );
}

export default ProductCard;
