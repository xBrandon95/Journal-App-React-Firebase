import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Escribe algun titulo"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="¿Que paso hoy?"
          className="notes__textarea"
        ></textarea>

        <div className="notes__image">
          <img src="/img/pinguino8.png" alt="imagen" />
        </div>
      </div>
    </div>
  );
};
