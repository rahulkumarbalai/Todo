import React, { useState } from 'react'

export default function AddTodo(props) {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(title===""){
      alert("Title required");
    }
    else if(description===""){
      alert("Description required");
    }
    else{
      props.addTodo(title,description);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className='container my-2'>
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title for todo</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">ADD</button>
      </form>
    </div>
  )
}
