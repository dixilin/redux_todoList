import {
  CHANGE_INPUT_VAL,
  SUBMIT_LIST,
  DELETE_ITEM,
} from "./actionTypes";

const defaultState = {
  inputValue: "12",
  list: ["阿斯顿发射点", "阿斯蒂芬阿斯蒂形参"],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VAL: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.val;
      return newState;
    }
    case SUBMIT_LIST: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.unshift(action.val);
      newState.inputValue = ''
      return newState;
    }
    case DELETE_ITEM: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.idx,1);
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
