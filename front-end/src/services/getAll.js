import axios from 'axios';

const getAll = async () => {
  try {
    const getTasks = await axios.get('http://localhost:3001/tasks');
    return getTasks.data;
  } catch (err) {
    return err;
  }
};

export default getAll;
