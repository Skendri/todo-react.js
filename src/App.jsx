import { useState } from "react"
import './App.css'

export default function app(){
  const[newItem, setNewItem] = useState("")
  const[todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false},
      ]
    })
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        } 
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label > <span className="animated-text">
              <span className="key">T</span>
              <span className="key">o</span>
              <span className="key">d</span>
              <span className="key">o</span>
              <span className="key">F</span>
              <span className="key">o</span>
              <span className="key">r</span>
              <span className="key">T</span>
              <span className="key">o</span>
              <span className="key">d</span>
              <span className="key">a</span>
              <span className="key">y</span>
                </span> </label>
                <span style={{fontSize: 30 }}>{':'}</span>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" placeholder="type to remember" id="input" />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "no todo to show"}
        {todos.map(todo => {
          return ( <li key={todo.id}>
          <label>
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked )} />
           {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
        )
        })}
      </ul>
    </div>
  )
};