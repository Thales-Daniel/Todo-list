import React from 'react';
import PropTypes from 'prop-types';
import '../css/todo.css';
import { TaskContext } from '../provider/task';

function Todo({ todo }) {
  const { deleteTodo } = React.useContext(TaskContext);
  return (
    <table id="customers">
      <thead>
        <th>Task</th>
        <th>Date</th>
        <th>Exclude</th>
      </thead>
      <tbody>
        {todo.map(({ _id: id, task, date }) => (
          <tr id="tabela" key={id}>
            <td>{ task }</td>
            <td>{ date }</td>
            <td>
              <button
                onClick={() => deleteTodo(id)}
                className="delete-button"
                type="button"
              >
                excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
}

Todo.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.array.isRequired,
  ).isRequired,
};

export default Todo;
