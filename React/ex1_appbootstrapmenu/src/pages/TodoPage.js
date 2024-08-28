import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function TodoPage() {
  const [todos, setTodos] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);

  React.useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  React.useEffect(() => {
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
    <div>
      <h1>Todo List</h1>
      <TodoForm
        addOrUpdateTodo={addOrUpdateTodo}
        currentTodo={editIndex !== null ? todos[editIndex] : ''}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default TodoPage;
