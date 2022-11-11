import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const submit=(e)=>{
    e.preventDefault();
    if(!title.charAt(0).match(/[A-Z]/i)){
      alert("Title should start with uppercase character");
    }
    else if(title.length<=8 || title.length>20){
      alert("Title length should be between 8-20 characters");
    }
    else if(description===""){
      alert("Description required");
    }
    else{
      addTodo(title,description);
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
