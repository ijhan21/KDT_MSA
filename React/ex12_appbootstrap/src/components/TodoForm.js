import React, { useState, useEffect } from 'react';

function TodoForm({ addOrUpdateTodo, currentTodo }) {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    setTodo(currentTodo);
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      addOrUpdateTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit" className="btn btn-primary">
          {currentTodo ? 'Update Todo' : 'Add Todo'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
