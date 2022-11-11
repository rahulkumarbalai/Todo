import React from 'react'

export default function Todo({todo, onDelete}) {
  return (
    <>
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked"> Work Done </label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
    </>
  )
}
