export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = () => ({
  type: INCREMENT_COUNTER,
});

export const decrement = () => ({
  type: DECREMENT_COUNTER,
});

// Action types
export const GET_DRAWINGS = 'GET_DRAWINGS';
export const SAVE_DRAWINGS = 'SAVE_DRAWINGS';
export const SET_ERROR = 'SET_ERROR';

// Action creators
export const getDrawings = () => ({
  type: GET_DRAWINGS,
});

export const saveDrawings = (drawings) => ({
  type: SAVE_DRAWINGS,
  drawings,
});

export const setError = () => ({
  type: SET_ERROR,
});
