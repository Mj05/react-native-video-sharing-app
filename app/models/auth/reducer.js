import { HANDLE_ERROR } from "./action";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ERROR:
      return state;

    default:
      return state;
  }
};
