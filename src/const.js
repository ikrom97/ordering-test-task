export const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export const deliveryFee = 200;

export const promoCode = {
  code: '1B6D9FC',
  discount: 500,
  isApplied: false,
};

export const initialState = {
  selectedProducts: [
    {
      productID: 1,
      quantity: 2,
      size: 'M',
      color: {
        name: 'Black',
        code: '#444444'
      },
      isDeleted: false,
    },
    {
      productID: 2,
      quantity: 1,
      size: 'S',
      color: {
        name: 'Black',
        code: '#444444',
      },
      isDeleted: false,
    }
  ],
};
