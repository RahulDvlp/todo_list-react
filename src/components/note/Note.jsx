import React, { useState } from "react";
import "./note.css";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DoneIcon from "@mui/icons-material/Done";

const Note = (props) => {
  const [click, setClick] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function doneClick() {
    setClick(true);
  }

  return (
    <div className="tdl__note">
      <h1>{props.title}</h1>
      <p
        style={{
          textDecoration: click && "line-through",
        }}
      >
        {props.content}
      </p>
      <button onClick={handleClick}>
        <RemoveCircleIcon />
      </button>
      <button onClick={doneClick}>
        <DoneIcon />
      </button>
    </div>
  );
};

export default Note;
