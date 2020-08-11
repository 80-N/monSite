import drawings from 'src/data';

const initialState = {
  list: drawings,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}
