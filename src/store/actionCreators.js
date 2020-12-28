import { CHANGE_INPUT_VAL, SUBMIT_LIST, DELETE_ITEM } from "./actionTypes";

export const getChangeInputAction = (val) => {
  return {
    type: CHANGE_INPUT_VAL,
    val,
  };
};

export const getHandleSubmitAction = (val) => {
  return {
    type: SUBMIT_LIST,
    val,
  };
};

export const getDeleteItemAction = (idx) => {
  return {
    type: DELETE_ITEM,
    idx
  };
};

export const getHandleSubmitActionAsync = (val) => (dispatch) => {
  setTimeout(() => {
    dispatch(getHandleSubmitAction(val))
  }, 1000);
};
