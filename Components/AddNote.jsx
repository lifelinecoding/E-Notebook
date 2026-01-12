import React, { useState, useContext } from "react";
import NoteContext from "../Context/Note/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add the note will go here
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    // Logic to handle input changes will go here
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 fw-bold text-primary">
                  Create New Note
                </h3>

                <form onSubmit={handleSubmit}>
                  {/* Title */}
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-semibold">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="title"
                      name="title"
                      placeholder="Enter note title"
                      value={note.title}
                      onChange={onChange}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label
                      htmlFor="description"
                      className="form-label fw-semibold"
                    >
                      Description
                    </label>
                    <textarea
                      className="form-control rounded-3"
                      id="description"
                      name="description"
                      rows="4"
                      placeholder="Write your note here..."
                      value={note.description}
                      onChange={onChange}
                      required
                    ></textarea>
                  </div>

                  {/* Tag */}
                  <div className="mb-4">
                    <label htmlFor="tag" className="form-label fw-semibold">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      id="tag"
                      name="tag"
                      placeholder="e.g. Work, Personal, Study"
                      value={note.tag}
                      onChange={onChange}
                    />
                  </div>

                  {/* Button */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-3"
                    >
                      Create Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
