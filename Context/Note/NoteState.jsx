import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const noteInitial = [
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
  {
    "_id": "695f8b2cd2518de9c7699f58",
    "user": "695e25cf44f39271ec4e79ef",
    "title": "My title",
    "description": "I am a hero",
    "tag": "personal",
    "date": "2026-01-08T10:47:08.234Z",
    "__v": 0
  },
];
const [Note, setNote] = useState(noteInitial)

  return (
    <NoteContext.Provider value={{Note, setNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState