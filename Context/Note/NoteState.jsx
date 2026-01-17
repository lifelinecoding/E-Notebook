import { useState, useContext } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../Alert/AlertContext";

const NoteState = (props) => {
  const alertcontext = useContext(AlertContext);
  const { showAlert } = alertcontext;

  const Host = "http://localhost:5000/api";

  const [Note, setNote] = useState([]);

  const getNotes = async () => {
    try {
      const promise = await fetch(`${Host}/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZTI1Y2Y0NGYzOTI3MWVjNGU3OWVmIn0sImlhdCI6MTc2Nzc3OTA5N30.5GLy_MbKUVnEhXRILKGRtgXXyM2iSEWJPXKAiX2jxBY",
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
    try {
      const promise = await fetch(`${Host}/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZTI1Y2Y0NGYzOTI3MWVjNGU3OWVmIn0sImlhdCI6MTc2Nzc3OTA5N30.5GLy_MbKUVnEhXRILKGRtgXXyM2iSEWJPXKAiX2jxBY",
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
    try {
      const promise = await fetch(`${Host}/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZTI1Y2Y0NGYzOTI3MWVjNGU3OWVmIn0sImlhdCI6MTc2Nzc3OTA5N30.5GLy_MbKUVnEhXRILKGRtgXXyM2iSEWJPXKAiX2jxBY",
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
    try {
      const promise = await fetch(`${Host}/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZTI1Y2Y0NGYzOTI3MWVjNGU3OWVmIn0sImlhdCI6MTc2Nzc3OTA5N30.5GLy_MbKUVnEhXRILKGRtgXXyM2iSEWJPXKAiX2jxBY",
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
