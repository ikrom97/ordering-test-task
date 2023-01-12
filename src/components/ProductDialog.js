function ProductDialog({ product, state, setState }) {
  const handleCloseClick = () => {
    state.selectedProducts = state.selectedProducts
      .filter((item) => item.productID !== product.id)
    setState({...state});
  };

  const handleReestablishClick = () => {
    const index = state.selectedProducts.findIndex((item) => item.productID === product.id);

    state.selectedProducts[index].isDeleted = false;
    setState({...state});
  };

  return (
    <dialog className="product-dialog" open>
      <p className="product-dialog__message">
        <button className="product-dialog__close"
          title="Закрыть модальное окно"
          type="button"
          onClick={handleCloseClick}
        >
          <svg width={16} height={16}>
            <use xlinkHref="img/sprite.svg#close" />
          </svg>
        </button>

        <span>Товар <strong>{product.title}</strong> был удален из корзины.</span>

        <button className="product-dialog__reestablish"
          type="button"
          onClick={handleReestablishClick}
        >
          Восстановить
        </button>
      </p>
    </dialog>
  );
}

export default ProductDialog;
