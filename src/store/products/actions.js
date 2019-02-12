export const GET_PRODUCTS_ASYNC = 'Get products';
export const getProductsAsync = () => ({ type: GET_PRODUCTS_ASYNC });

export const SET_PRODUCTS = 'Set products';
export const setProducts = data => ({ type: SET_PRODUCTS, data });

export const CLEAN_PRODUCTS = 'Clean products';
export const cleanProducts = () => ({ type: CLEAN_PRODUCTS });

export const UPDATE_ONE_PRODUCT_ASYNC = 'Update one product';
export const updateProductAsync = data => ({ type: UPDATE_ONE_PRODUCT_ASYNC, data });

export const DELETE_ONE_PRODUCT_ASYNC = 'Delete one product';
export const deleteProductAsync = data => ({ type: DELETE_ONE_PRODUCT_ASYNC, data });

export const GET_ONE_PRODUCT_ASYNC = 'Get one product';
export const getProductAsync = data => ({ type: GET_ONE_PRODUCT_ASYNC, data });

export const SET_ONE_PRODUCT = 'Set one product';
export const setOneProduct = data => ({ type: SET_ONE_PRODUCT, data });

export const CLEAN_ONE_PRODUCT = 'Clean product';
export const cleanOneProduct = () => ({ type: CLEAN_ONE_PRODUCT });

export const SEND_ONE_PRODUCT_ASYNC = 'Send one product';
export const sendProductAsync = data => ({ type: SEND_ONE_PRODUCT_ASYNC, data });

export const SEND_IMAGE_ASYNC = 'Send product image';
export const sendImageAsync = (data, id) => ({ type: SEND_IMAGE_ASYNC, data, id });
