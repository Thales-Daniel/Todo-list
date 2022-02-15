const connection = require('../connection');

const createTaskt = async (task) => {
  const connections = await connection();
  const result = await connections.collection('task').insertOne({ task });
  return { id: result.insertedId, task };
};

module.exports = createTaskt;
