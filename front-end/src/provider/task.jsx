import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = React.createContext({});

export function TaskProvider({ children }) {
  const tasks = {
    tasks: ['teste'],
  };

  const taskHook = useMemo(() => (tasks), []);

  return (
    <TaskContext.Provider value={taskHook}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.array.isRequired,
  ).isRequired,
};
