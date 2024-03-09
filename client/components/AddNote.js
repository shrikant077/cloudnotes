import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault(); //prevent reload page
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value }); //... -> spread operator so ...note says jo note main value hai wo aa jaye plus usle aage e.target.name me e.target.value add kar do.
    }

    return (
        <div className="container my-3">
            <h2>Add a New Note</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fs-5">Title</label>
                    <textarea className="form-control" id="title" rows="1" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} placeholder='Title must be atleast 5 character' style={{fontStyle: "italic"}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-5">Content</label>
                    <textarea className="form-control" id="description" rows="3" name="description" value={note.description} onChange={onChange} placeholder='Content must be atleast 5 character' style={{fontStyle: "italic"}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label fs-5">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} placeholder="Tag your Note" style={{fontStyle: "italic"}}/>
                </div>              
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote;
