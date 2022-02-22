const response = require('../../helpers/responseError');
const updateStatusFromModel = require('../../models/tasks/updateStatus');
const findTask = require('../../models/tasks/getById');
const { status, messages } = require('../../helpers/messagesAndStatus');

const updateStatus = async ({ id, newStatus }) => {
  const fidingOldStatus = await findTask(id);

  if (!fidingOldStatus) return response(status.NOT_FOUND, messages.NOT_FOUND);

  if (!id || !newStatus) return response(status.BAD_REQUEST, messages.NOT_FOUND);

  const update = await updateStatusFromModel(id, newStatus);

  return update;
};

module.exports = updateStatus;
