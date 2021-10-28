import {actionShopping} from "./types";

export const addShopping = (product) => (dispatch) => {
  return dispatch({
    type: actionShopping.ADD,
    payload: {
      product: product,
      quantity: 1,
    },
  });
};

export const fetchShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.FETCH,
  });
};

export const clearShopping = () => (dispatch) => {
  return dispatch({
    type: actionShopping.CLEAR,
  });
};
