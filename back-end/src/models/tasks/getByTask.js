const connection = require('../connection');

const getByTask = async (task) => (await connection())
  .collection('task').findOne({ task });

module.exports = getByTask;
