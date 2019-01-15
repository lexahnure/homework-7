import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getProducts = () => rest.get('public/products');
const requestUpdateProductName = (id, data) => rest.put(`products/${id}`, data);
const requestDeleteProduct = id => rest.delete(`products/${id}`);

export {
  getInfo,
  getProducts,
  requestUpdateProductName,
  requestDeleteProduct
};
