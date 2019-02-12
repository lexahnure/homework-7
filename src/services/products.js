import { rest } from './rest';

const getProducts = () => rest.get('public/products');
const requestUpdateProduct = data => rest.put(`products/${data.id}`, data);
const requestDeleteProduct = id => rest.delete(`products/${id}`);
const getProduct = id => rest.get(`public/products/${id}`);
const sendProduct = data => rest.post('products', data);
const sendImage = (data, id) => rest.postImg(`products/${id}/upload`, data);

export {
  getProducts,
  requestUpdateProduct,
  requestDeleteProduct,
  getProduct,
  sendProduct,
  sendImage
};
