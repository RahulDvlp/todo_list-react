import React, { useState } from "react";
import { Header, TextArea, Footer, Note } from "./index";
import "./app.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((note, i) => {
        return i !== id;
      });
    });
  }

  return (
    <>
      <div className="tdl__app-background">
        <Header />
        <TextArea onAdd={addNote} />
        {notes.map((note, i) => {
          return (
            <Note
              key={i}
              id={i}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
