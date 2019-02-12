import { SET_INFO, CLEAN_INFO, CLEAN_CATEGORIES, SET_CATEGORIES, SET_ONE_CATEGORY, CLEAN_ONE_CATEGORY } from './actions';
import { info as initial, categories as initialCategories, category as initialCategory } from '../initialState';

export const info = (state = initial, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.data;
    }
    case CLEAN_INFO: {
      return initial;
    }
  }
  return state;
};

export const categories = (state = initial, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return action.data;
    }
    case CLEAN_CATEGORIES: {
      return initialCategories;
    }
  }
  return state;
};

export const category = (state = initialCategory, action) => {
  switch (action.type) {
    case SET_ONE_CATEGORY: {
      return action.data;
    }
    case CLEAN_ONE_CATEGORY: {
      return initialCategory;
    }
  }
  return state;
};
