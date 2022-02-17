import axios from 'axios';

const createTask = async (task) => {
  try {
    const postTask = await axios.post('http://localhost:3001/tasks', { task });
    return postTask.data;
  } catch (err) {
    return err;
  }
};

export default createTask;
