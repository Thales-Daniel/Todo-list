const connection = require('../connection');
const dataFunc = require('../../helpers/date');

const createTaskt = async (task) => {
  const dateBr = dataFunc(new Date());
  const connections = await connection();
  const result = await connections.collection('task').insertOne({ task, dateBr });
  return { id: result.insertedId, task, dateBr };
};

module.exports = createTaskt;
