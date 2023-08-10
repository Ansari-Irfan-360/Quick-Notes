import React, { useState } from "react";
import Note from "./Note";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

var CreateArea = () => {
  var [text, setText] = useState({ title: "", content: "" });
  var [newNote, setNewNote] = useState([]);

  function handleChange(event) {
    var value = event.target.value;
    var name = event.target.name;

    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleAdd(event) {
    setNewNote((prevValue) => {
      return [...prevValue, text];
    });

    setText({ title: "", content: "" });

    event.preventDefault();
  }

  function handleDelete(id) {
    setNewNote((prevValue) => {
      return prevValue.filter((ele, index) => {
        return index !== id;
      });
    });
    
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={text.title}
          style={{fontWeight:"bolder"}}
        />
        <textarea
          name="content"
          placeholder="Write your note here..."
          rows="3"
          onChange={handleChange}
          value={text.content}
        />
        <Fab onClick={handleAdd}><AddIcon/></Fab>
      </form>
      {newNote.map((note, index) => {
        return(
          <Note
          key={index}
          title={note.title}
          content={note.content}
          id={index}
          deleteNote={handleDelete}
        />
        )
      })}
    </div>
  );
}

export default CreateArea;
