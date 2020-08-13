import { SAVE_DRAWINGS, SET_ERROR } from 'src/actions';

const initialState = {
  list: [],
  loading: true,
  error: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_DRAWINGS:
      return {
        ...state,
        loading: false,
        list: action.drawings,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
