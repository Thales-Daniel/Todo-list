const { ObjectId } = require('mongodb');
const { format } = require('date-fns');
const connection = require('../connection');

const updateTask = async (id, newTask) => {
  const timestamp = format(new Date(), 'dd-MM-yyy HH:mm:ss');
  const connections = await connection();
  const result = (await connections).collection('task').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { task: newTask, date: timestamp } },
    { returnOriginal: true },
  );
  const retorno = await result;
  return { ...retorno.value, newTask };
};

module.exports = updateTask;
