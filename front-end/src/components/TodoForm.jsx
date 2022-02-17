import React, { useState } from 'react';
import createTask from '../services/create';
import '../css/todoForm.css';

function TodoForm() {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInput('');
  };

  const handleClick = async () => {
    await createTask(input);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button type="submit" disabled={!input.length} className="todo-button" onClick={handleClick}>
        Add todo
      </button>

    </form>
  );
}

export default TodoForm;
