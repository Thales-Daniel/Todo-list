const { ObjectId } = require('mongodb');
const connection = require('../connection');

const deleteModel = async (id) => (await connection())
  .collection('recipes').deleteOne(
    { _id: ObjectId(id) },
  );

module.exports = deleteModel;
