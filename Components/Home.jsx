import React, { useContext } from "react";
import Context from "../Context/Note/NoteContext";
import NoteItem from "./NoteItem";

const Home = () => {
  const context = useContext(Context);
  const { Note } = context;
  return (
    <>
      <div className="container m-auto">
        <div className="row mt-2">
          {Note.map((note, idx) => {
            return <NoteItem key={idx} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
