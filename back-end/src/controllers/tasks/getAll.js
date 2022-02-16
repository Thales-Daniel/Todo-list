const getAllFromServices = require('../../services/tasks/getAll');
const { status } = require('../../helpers/messagesAndStatus');

const getAllTasks = async (_req, res, next) => {
  try {
    const resultFromServices = await getAllFromServices();

    if (resultFromServices.code) return next(resultFromServices);

    return res.status(status.OK).json(resultFromServices);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllTasks;
