import axios from 'axios';

const deleteTask = async (id) => {
  try {
    const postTask = await axios.delete(`http://localhost:3001/tasks/${id}`);
    return postTask.data;
  } catch (err) {
    return err;
  }
};

export default deleteTask;
