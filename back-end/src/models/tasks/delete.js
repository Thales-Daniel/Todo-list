const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteTask = async (id) => (await connection())
  .collection('task').deleteOne(
    { _id: ObjectId(id) },
  );

module.exports = deleteTask;
