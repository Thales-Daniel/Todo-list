const connection = require('../connection');

const updateTask = async (oldTask, newTask) => {
  const connections = await connection();
  const result = (await connections).collection('task').findOneAndUpdate(
    { task: oldTask },
    { $set: { newTask } },
    { returnOriginal: false },
  );
  return result;
};

const teste = async () => {
  const result = await updateTask('fazer exercicios', 'fazer um app');
  console.log(result);
};

teste();

module.exports = updateTask;
