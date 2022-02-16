import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './provider/task';

ReactDOM.render(
  <TaskProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskProvider>,
  document.getElementById('root'),
);
