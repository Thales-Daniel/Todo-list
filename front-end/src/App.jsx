import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './css/app.css';

function App() {
  return (
    <div className="app">
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
