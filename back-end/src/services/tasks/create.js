const response = require('../../helpers/responseError');
const createTaskFromModel = require('../../models/tasks/create');
const { status, messages } = require('../../helpers/messagesAndStatus');

const createTask = async (task) => {
  if (!task) return response(status.BAD_REQUEST, messages.NOT_CREATED);
  const result = await createTaskFromModel(task);
  return result;
};

module.exports = createTask;
