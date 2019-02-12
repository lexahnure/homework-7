import { SET_PRODUCTS, SET_ONE_PRODUCT, CLEAN_PRODUCTS, CLEAN_ONE_PRODUCT } from './actions';
import { products as initialProducts, product as initialProduct } from '../initialState';

export const products = (state = initialProducts, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return action.data;
    }
    case CLEAN_PRODUCTS: {
      return initialProducts;
    }
  }
  return state;
};

export const product = (state = initialProduct, action) => {
  switch (action.type) {
    case SET_ONE_PRODUCT: {
      return action.data;
    }
    case CLEAN_ONE_PRODUCT: {
      return initialProduct;
    }
  }
  return state;
};
