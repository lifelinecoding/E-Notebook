import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteInitial = [
    {
      _id: "695f8b2cd2518de9c7699f58t",
      user: "695e25cf44f39271ec4e79ef",
      title: "My title",
      description: "I am a hero",
      tag: "personal",
      date: "2026-01-08T10:47:08.234Z",
      __v: 0,
    },
    {
      _id: "695f8b2cd2518de9c7699f58x",
      user: "695e25cf44f39271ec4e79ef",
      title: "My title",
      description: "I am a hero",
      tag: "personal",
      date: "2026-01-08T10:47:08.234Z",
      __v: 0,
    },
  ];
  const [Note, setNote] = useState(noteInitial);


  // Function to add a new note
  const addNote = (title, description, tag) => {
    // TODO: API call to add note to backend would go here
    const newNote = {
      _id: Date.now().toString(),
      user: "695e25cf44f39271ec4e79ef",
      title,
      description,
      tag,
      date: new Date().toISOString(),
      __v: 0,
    };
    setNote([...Note, newNote]);
  };

  // Function to delete an existing note

  const deleteNote = (id) => {
    console.log("Deleting note with id:" + id);
    if(window.confirm("Are you sure you want to delete this note?")){
      const noteToDelete = Note.forEach(element => {
        if(element._id === id){
          Note.splice(Note.indexOf(element), 1);
          setNote([...Note]);
        }
      });
    }
  }

  // Function to update an existing note

  return (
    <NoteContext.Provider value={{ Note, setNote, addNote, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
