import React, { useState } from "react";
import "./textarea.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Grow from "@mui/material/Grow";

const TextArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [bool, setBool] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function state() {
    setBool(true);
  }

  return (
    <div className="tdl__textarea">
      <div className="tdl__textarea-createnote">
        <form className="tdl__textarea-createnote_form">
          {bool && (
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={note.title}
            />
          )}

          <textarea
            name="content"
            placeholder="Take a note"
            rows={bool ? "2" : "1"}
            onChange={handleChange}
            value={note.content}
            onClick={state}
          />
          <div className="tdl__button-div">
            <Grow in={bool}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Grow>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TextArea;
