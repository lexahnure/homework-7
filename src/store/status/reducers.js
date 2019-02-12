import { SET_ERROR, CLEAN_ERROR } from './actions';
import { error as initialError } from '../initialState';

export const error = (state = initialError, action) => {
  switch (action.type) {
    case SET_ERROR: {
      return action.data;
    }
    case CLEAN_ERROR: {
      return initialError;
    }
  }
  return state;
};
