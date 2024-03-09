import noteContext from "./noteContext";
import { useState } from "react";
import { BASE_URL } from "../../components/helper";
/*
there will be error if you directly try to access port 5000 from port 3000
for that search on google how to fix cors in express

you have to install npm install cors in backend folder and add this code there in index.js
*/

const NoteState = (props) => {
  
  const host = BASE_URL;
  const notesIntial = [];
  
  const [notes, setNotes] = useState(notesIntial);
  
  //get all notes
  const getNotes = async () => {
    //API call - fetch with headers
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json)
  }
  

  //add a note
  const addNote = async (title, description, tag) => {
    //API call - fetch with headers
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  }

  // Delete a Note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API call - fetch with headers
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "authToken": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();
    console.log(json);
    //logic to edit in client
    let notecopy=JSON.parse(JSON.stringify(notes)); //need to create a copy of note to be edited to reflect live updation in client side(without reload)
    for (let index = 0; index < notecopy.length; index++) {
      const element = notecopy[index];
      if (element._id === id) {
        notecopy[index].title = title;
        notecopy[index].description = description;
        notecopy[index].tag = tag;
        break;
      }
    }
    setNotes(notecopy);
  }
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;