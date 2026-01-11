import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="card col-md-3 mx-2 my-3" style={{ width: "18rem", }}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <i class="fa-regular fa-pen-to-square"></i>
        <i class="fa-regular fa-trash-can mx-2"></i>
        {/* <p className="card-text"><small className="text-muted">{note.tag}</small></p> */}
      </div>
    </div>
  );
};

export default NoteItem;
