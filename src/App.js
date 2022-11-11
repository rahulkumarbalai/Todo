import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  let allTodo;
  if (localStorage.getItem("todos") === null) {
    allTodo = [];
  }
  else {
    allTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo= (title,description)=>{
    let number=todos.length+1;
    const newTodo={
      description,
      number,
      title,
    }
    setTodos([...todos,newTodo]);
  }

  const [todos,setTodos]=useState(allTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
    <Router>
      <Navbar title='My Todo list'/>
      <Routes>
        <Route exact path='/' element={
        <>
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete} />
        </>}>
        </Route>
        <Route exact path='/about' element={<About />}>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
