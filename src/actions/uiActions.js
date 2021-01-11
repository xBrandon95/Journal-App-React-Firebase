import {
  UI_FINISH_LOADING,
  UI_REMOVE_ERROR,
  UI_SET_ERROR,
  UI_START_LOADING,
} from "../types/types";

export const setErrorAction = (err) => ({
  type: UI_SET_ERROR,
  payload: err,
});

export const removeErrorAction = () => ({
  type: UI_REMOVE_ERROR,
});

export const startLoading = () => ({
  type: UI_START_LOADING,
});

export const finishLoading = () => ({
  type: UI_FINISH_LOADING,
});
