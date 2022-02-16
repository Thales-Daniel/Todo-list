const connection = require('../connection');
const dataFunc = require('../../helpers/date');

const createTaskt = async (task) => {
  const connections = await connection();
  const result = await connections.collection('task').insertOne({ task, date: dataFunc });
  return { id: result.insertedId, task, date: dataFunc };
};

module.exports = createTaskt;
