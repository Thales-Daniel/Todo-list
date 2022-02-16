import React from 'react';
import { TaskContext } from '../provider/task';

function Todo() {
  const task = React.useContext(TaskContext);

  console.log(task);
  return (
    <div>Todo</div>
  );
}

export default Todo;
