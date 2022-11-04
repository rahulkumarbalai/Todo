import React from 'react';
import Todo from './Todo';

export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className='my-3'>List of Todos</h3>
      {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
          return (<Todo todo={todo} key={todo.number} onDelete={props.onDelete}/>
        );
        })
      }
    </div>
  );
}
