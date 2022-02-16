const response = require('../../helpers/responseError');
const updateFromModel = require('../../models/tasks/update');
const findTask = require('../../models/tasks/getByTask');
const { status, messages } = require('../../helpers/messagesAndStatus');

const getAllTasks = async ({ id, newTask }) => {
  const findingOldTask = await findTask(id);
  if (!findingOldTask) return response(status.NOT_FOUND, messages.NOT_FOUND);
  if (!id || !newTask) return response(status.BAD_REQUEST, messages.NOT_FOUND);
  const update = await updateFromModel(id, newTask);
  return update;
};

module.exports = getAllTasks;
