const response = require('../../helpers/responseError');
const updateFromModel = require('../../models/tasks/update');
const findTask = require('../../models/tasks/getByTask');
const { status, messages } = require('../../helpers/messagesAndStatus');

const getAllTasks = async ({ oldTask, newTask }) => {
  const findingOldTask = await findTask(oldTask);
  if (!findingOldTask) return response(status.NOT_FOUND, messages.NOT_FOUND);
  if (!oldTask || !newTask) return response(status.BAD_REQUEST, messages.NOT_FOUND);
  const update = await updateFromModel(oldTask, newTask);
  return update;
};

module.exports = getAllTasks;
