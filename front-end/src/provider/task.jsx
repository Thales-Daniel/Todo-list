/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getAll from '../services/getAll';
import deleteTask from '../services/delete';

export const TaskContext = React.createContext({});

export function TaskProvider({ children }) {
  const [task, setTask] = useState([]);

  useEffect(async () => {
    const getAllTasks = await getAll();
    setTask([...getAllTasks]);
  }, [task]);

  const deleteTodo = async (id) => {
    await deleteTask(id);
  };

  return (
    <TaskContext.Provider value={{ task, setTask, deleteTodo }}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.array.isRequired,
  ).isRequired,
};
