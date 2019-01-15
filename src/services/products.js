import { rest } from './rest';

const getProducts = () => rest.get('public/products');
const requestUpdateProductName = (id, data) => rest.put(`products/${id}`, data);
const requestDeleteProduct = id => rest.delete(`products/${id}`);
const getProduct = id => rest.get(`public/products/${id}`);

export {
  getProducts,
  requestUpdateProductName,
  requestDeleteProduct,
  getProduct
};
