const connection = require('../connection');
const dataFunc = require('../../helpers/date');

const updateTask = async (oldTask, newTask) => {
  const connections = await connection();
  const result = (await connections).collection('task').findOneAndUpdate(
    { task: oldTask },
    { $set: { task: newTask, date: dataFunc } },
    { returnOriginal: true },
  );
  const retorno = await result;
  return { ...retorno.value, newTask };
};

module.exports = updateTask;
