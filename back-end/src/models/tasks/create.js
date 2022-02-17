const { format } = require('date-fns');
const connection = require('../connection');

const createTaskt = async (task) => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  const connections = await connection();
  const result = await connections.collection('task').insertOne({ task, date: timestamp });
  return { id: result.insertedId, task, date: timestamp };
};

module.exports = createTaskt;
