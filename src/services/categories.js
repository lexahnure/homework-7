import { rest } from './rest';

const getInfo = () => rest.get('shop_info');
const getProducts = () => rest.get('public/products');
const updateProductName = (id, data) => rest.put(`products/${id}`, data);
const deleteProduct = id => rest.delete(`products/${id}`);

export { getInfo, getProducts, updateProductName, deleteProduct };
