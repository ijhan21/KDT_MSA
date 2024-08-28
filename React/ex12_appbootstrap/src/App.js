import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addOrUpdateTodo = (todo) => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        currentTodo={editIndex !== null ? todos[editIndex] : ''}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
