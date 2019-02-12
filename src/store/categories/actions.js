export const GET_INFO_ASYNC = 'Get info';
export const getInfoAsync = () => ({ type: GET_INFO_ASYNC });

export const SET_INFO = 'Set info';
export const setInfo = data => ({ type: SET_INFO, data });

export const CLEAN_INFO = 'Clean info';
export const cleanInfo = () => ({ type: CLEAN_INFO });

export const GET_CATEGORIES_ASYNC = 'Get categories';
export const getCategoriesAsync = () => ({ type: GET_CATEGORIES_ASYNC });

export const SET_CATEGORIES = 'Set categories';
export const setCategories = data => ({ type: SET_CATEGORIES, data });

export const CLEAN_CATEGORIES = 'Clean categories';
export const cleanCategories = () => ({ type: CLEAN_CATEGORIES });

export const UPDATE_CATEGORIES_ASYNC = 'Update categories';
export const updateCategoriesAsync = data => ({ type: UPDATE_CATEGORIES_ASYNC, data });

export const GET_ONE_CATEGORY_ASYNC = 'Get one category async';
export const getOneCategoryAsync = data => ({ type: GET_ONE_CATEGORY_ASYNC, data });

export const SET_ONE_CATEGORY = 'Set one category to store';
export const setOneCategory = data => ({ type: SET_ONE_CATEGORY, data });

export const CLEAN_ONE_CATEGORY = 'Clean category in store';
export const cleanOneCategory = () => ({ type: CLEAN_ONE_CATEGORY });

export const UPDATE_ONE_CATEGORY_ASYNC = 'Update one category';
export const updateOneCategoryAsync = data => ({ type: UPDATE_ONE_CATEGORY_ASYNC, data });
