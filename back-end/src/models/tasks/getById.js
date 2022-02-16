const { ObjectId } = require('mongodb');
const connection = require('../connection');

const getById = async (id) => (await connection())
  .collection('task').findOne(ObjectId(id));

module.exports = getById;
