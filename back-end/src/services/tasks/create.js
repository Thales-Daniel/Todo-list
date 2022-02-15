const { response } = require('../../api/app');
const createTaskFromModel = require('../../models/tasks/create');
const { status, messages } = require('../../helpers/messagesAndStatus');

const createTask = async (task) => {
  const result = await createTaskFromModel(task);
  if (!result) return response(status.BAD_REQUEST, messages.NOT_CREATED);
  return result;
};

module.exports = createTask;
