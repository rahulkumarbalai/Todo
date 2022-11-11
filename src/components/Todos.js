import React from 'react';
import Todo from './Todo';

export default function Todos({onDelete, todos}) {
  return (
    <div className='container'>
      <h3 className='my-3'>List of Todos</h3>
      {todos.length===0? "No Todos to display":
        todos.map((todo)=>{
          return (<Todo todo={todo} key={todo.number} onDelete={onDelete}/>
        );
        })
      }
    </div>
  );
}
