import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../Context/Note/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(Context);
  const { Note, getNotes, updateNote } = context;
  useEffect(() => {
    getNotes();
  }, [Note]);

  const ref = useRef(null);
  const closeRef = useRef(null);

  const [notes, setnotes] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const editNote = (currentNote) => {
    setnotes({
      eid: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    ref.current.click();
  };

  const onChange = (e) => {
    // Logic to handle input changes will go here
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateNote(notes.eid, notes.etitle, notes.edescription, notes.etag);
    closeRef.current.click();
  };

  return (
    <>
      <AddNote />

      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Title */}
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label fw-semibold">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="etitle"
                    name="etitle"
                    placeholder="Enter note title"
                    value={notes.etitle}
                    onChange={onChange}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label
                    htmlFor="edescription"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    className="form-control rounded-3"
                    id="edescription"
                    name="edescription"
                    rows="4"
                    placeholder="Write your note here..."
                    value={notes.edescription}
                    onChange={onChange}
                    required
                  ></textarea>
                </div>

                {/* Tag */}
                <div className="mb-4">
                  <label htmlFor="etag" className="form-label fw-semibold">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    id="etag"
                    name="etag"
                    placeholder="e.g. Work, Personal, Study"
                    value={notes.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 d-flex justify-content-center">
        <div className="row w-[80] justify-content-start px-3">
          {Note.map((note, idx) => {
            return <NoteItem key={idx} note={note} editNote={editNote} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
