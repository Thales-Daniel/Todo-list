import React from 'react';
import { TaskContext } from '../provider/task';
import Todo from './Todo';

function TodoList() {
  const { task } = React.useContext(TaskContext);

  return (
    <Todo todo={task} />
  );
}

export default TodoList;
