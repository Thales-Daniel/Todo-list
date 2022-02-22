const { ObjectId } = require('mongodb');
const connection = require('../connection');

const updateTask = async (id, newStatus) => {
  const connections = await connection();
  const result = (await connections).collection('task').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { status: newStatus } },
    { returnOriginal: true },
  );
  const retorno = await result;
  return { ...retorno.value, newStatus };
};

// const teste = async () => {
//   const resolve = await updateTask('62142408f6cf4d47b759f05b', 'concluido');
//   console.log(resolve);
// };

module.exports = updateTask;
