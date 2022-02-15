const response = require('../../helpers/responseError');
const getAllFromModel = require('../../models/tasks/getAll');
const { status, messages } = require('../../helpers/messagesAndStatus');

const getAllTasks = async () => {
  const result = await getAllFromModel();
  if (!result) return response(status.NOT_FOUND, messages.NOT_FOUND);
  return result;
};

module.exports = getAllTasks;
