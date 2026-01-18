import { useState, useContext } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../Alert/AlertContext";

const NoteState = (props) => {
  const alertcontext = useContext(AlertContext);
  const { showAlert } = alertcontext;

  // const Host = "http://localhost:5000/api";

  const [Note, setNote] = useState([]);

  const getNotes = async () => {
    const getNotesEndpoint = import.meta.env.VITE_GETALLNOTES_ENDPOINT;
    try {
      const promise = await fetch(`${getNotesEndpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const notes = await promise.json();
      // console.log(notes);
      setNote(notes.notes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to add a new note
  const addNote = async (title, description, tag) => {
    const addNoteEndpoint = import.meta.env.VITE_ADDNOTE_ENDPOINT;
    try {
      const promise = await fetch(`${addNoteEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const response = await promise.json();
      console.log(response);
      const newNote = {
        title,
        description,
        tag,
      };
      setNote([...Note, newNote]);
      if (response.success) {
        showAlert("Note addedd successfully", "success");
      } else {
        showAlert("Failed to add the note", "danger");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to delete an existing note

  const deleteNote = async (id) => {
    const deleteNoteEndpoint = import.meta.env.VITE_DELETENOTE_ENDPOINT;
    try {
      const promise = await fetch(`${deleteNoteEndpoint + id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });

      const response = await promise.json();
      console.log(response);

      console.log("Deleting note with id:" + id);
      if (window.confirm("Are you sure you want to delete this note?")) {
        const noteToDelete = Note.filter((note) => note._id !== id);
        setNote(noteToDelete);
        showAlert("Note has been deleted successfully", "success");
      }
    } catch (error) {
      console.log(error.message);
      showAlert(error.message, "danger");
    }
  };

  // Function to update an existing note
  const updateNote = async (id, title, description, tag) => {
    const updateNoteEndpoint = import.meta.env.VITE_UPDATENOTE_ENDPOINT;
    try {
      const promise = await fetch(`${updateNoteEndpoint + id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const response = await promise.json();
      console.log(response);
      const updatedNotes = Note.map((note) => {
        console.log("Updating note with id:" + id);
        if (note._id === id) {
          // return { ...note, title, description, tag };
          return { ...note, title: title, description: description, tag: tag };
        }
        return note;
      });
      setNote(updatedNotes);
      if (response.success) {
        showAlert("Note has been Updated successfully", "success");
      } else {
        showAlert("Failed to update the note", "danger");
      }
    } catch (error) {
      console.log(error.message);
      showAlert(error.message, "danger");
    }
  };

  return (
    <NoteContext.Provider
      value={{ Note, setNote, addNote, deleteNote, updateNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
