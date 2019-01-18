import { rest } from './rest';

const getProducts = () => rest.get('public/products');
const requestUpdateProduct = data => rest.put(`products/${data.id}`, data);
const requestDeleteProduct = id => rest.delete(`products/${id}`);
const getProduct = id => rest.get(`public/products/${id}`);

export {
  getProducts,
  requestUpdateProduct,
  requestDeleteProduct,
  getProduct
};
