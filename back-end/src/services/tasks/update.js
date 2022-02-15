const response = require('../../helpers/responseError');
const updateFromModel = require('../../models/tasks/getAll');
const { status, messages } = require('../../helpers/messagesAndStatus');

const getAllTasks = async (oldTask, newTask) => {
  if (!oldTask || !newTask) return response(status.BAD_REQUEST, messages.NOT_FOUND);
  const update = await updateFromModel(oldTask, newTask);
  return update;
};

module.exports = getAllTasks;
