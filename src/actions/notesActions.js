import { db } from "../firebase/firebase-config";
import {
  NOTES_ADD_NEW,
  NOTES_DELETE,
  NOTES_LOAD,
  NOTES_LOGOUT_CLEANING,
  NOTES_UPDATE,
  NOTE_ACTIVE,
} from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNoteAction = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: NOTE_ACTIVE,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: NOTES_ADD_NEW,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: NOTES_LOAD,
  payload: notes,
});

export const startSaveNotes = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, noteToFirestore));

    Swal.fire("Guardado", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: NOTES_UPDATE,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;

    Swal.fire({
      title: "Cargando...",
      text: "Espere...",
      willOpen: () => {
        Swal.showLoading();
      },
      showConfirmButton: false,
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;

    dispatch(startSaveNotes(activeNote));

    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: NOTES_DELETE,
  payload: id,
});

export const notesLogout = () => ({
  type: NOTES_LOGOUT_CLEANING,
});
