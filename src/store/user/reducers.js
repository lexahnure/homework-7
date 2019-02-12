import { SET_USER } from './actions';
import { user as initial } from '../initialState';

export const user = (state = initial, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.data;
    }
  }
  return state;
};
