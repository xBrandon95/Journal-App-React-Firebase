import { LOGIN, LOGOUT } from "../types/types";

const initialState = {
  uid: "",
  name: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        uid: payload.uid,
        name: payload.displayName,
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
};
