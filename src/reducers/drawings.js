import { SAVE_DRAWINGS } from 'src/actions';

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
    default:
      return state;
  }
};
