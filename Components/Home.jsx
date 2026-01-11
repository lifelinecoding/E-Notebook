import React, { useContext } from "react";
import Context from "../Context/Note/NoteContext";

const Home = () => {
  const context = useContext(Context);
  const { Note } = context;
  return (
    <>
      <div>
        {Note.map((note, idx) => {
          return (
            <div key={idx}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <p>{note.tag}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
