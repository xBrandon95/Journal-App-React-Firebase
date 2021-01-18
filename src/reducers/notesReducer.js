import {
  NOTES_ADD_NEW,
  NOTES_DELETE,
  NOTES_LOAD,
  NOTES_LOGOUT_CLEANING,
  NOTES_UPDATE,
  NOTE_ACTIVE,
} from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTE_ACTIVE:
      return {
        ...state,
        active: {
          ...payload,
        },
      };

    case NOTES_ADD_NEW:
      return {
        ...state,
        notes: [payload, ...state.notes],
      };

    case NOTES_LOAD:
      return {
        ...state,
        notes: payload,
      };

    case NOTES_UPDATE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? payload.note : note
        ),
      };

    case NOTES_DELETE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== payload),
      };

    case NOTES_LOGOUT_CLEANING:
      return {
        ...state,
        notes: [],
        active: null,
      };
    default:
      return state;
  }
};
