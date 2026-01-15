import React, { useContext, useEffect, useEffectEvent } from "react";
import Context from "../Context/Note/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(Context);
  const { Note, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, [Note]);

  return (
    <>
      <AddNote />
      <div className="container my-3 d-flex justify-content-center">
        <div className="row w-[80] justify-content-start px-3">
          {Note.map((note, idx) => {
            return <NoteItem key={idx} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
