import React from 'react'

export default function Todo(props) {
  return (
    <>
    <div>
        <h4>{props.todo.title}</h4>
        <p>{props.todo.description}</p>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
          <label className="form-check-label" htmlFor="flexCheckChecked"> Work Done </label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      </div>
    </>
  )
}
