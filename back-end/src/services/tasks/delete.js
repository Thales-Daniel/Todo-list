const response = require('../../helpers/responseError');
const getById = require('../../models/tasks/getById');
const deleteTaskFromModel = require('../../models/tasks/delete');
const { status, messages } = require('../../helpers/messagesAndStatus');

const deleteTask = async (id) => {
  const findingTask = await getById(id);
  if (!findingTask) return response(status.BAD_REQUEST, messages.NOT_FOUND);
  if (!id) return response(status.BAD_REQUEST, messages.NOT_FOUND);
  const result = await deleteTaskFromModel(id);
  return result;
};

module.exports = deleteTask;
