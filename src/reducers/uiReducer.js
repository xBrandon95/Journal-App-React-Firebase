import {
  UI_FINISH_LOADING,
  UI_REMOVE_ERROR,
  UI_SET_ERROR,
  UI_START_LOADING,
} from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UI_SET_ERROR:
      return {
        ...state,
        msgError: payload,
      };

    case UI_REMOVE_ERROR:
      return {
        ...state,
        msgError: null,
      };

    case UI_START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UI_FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
