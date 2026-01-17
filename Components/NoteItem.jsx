import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/Note/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, editNote } = props;
  return (
    <div
      className="card col-md-3 mx-2 my-3 shadow"
      style={{ width: "18rem", position: "relative" }}
    >
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <div
          className="d-flex justify-content-start align-items-end"
          style={{ position: "absolute", bottom: "10px" }}
        >
          <i
            onClick={() => {
              editNote(note);
            }}
            className="fa-regular fa-pen-to-square"
          ></i>
          <i
            onClick={() => {
              deleteNote(note._id);
            }}
            className="fa-regular fa-trash-can mx-2"
          ></i>
        </div>
        {/* <p className="card-text"><small className="text-muted">{note.tag}</small></p> */}
      </div>
    </div>
  );
};

export default NoteItem;
