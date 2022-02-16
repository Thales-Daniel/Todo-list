const updateFromServices = require('../../services/tasks/update');
const { status } = require('../../helpers/messagesAndStatus');

const create = async (req, res, next) => {
  try {
    const { oldTask, newTask } = req.body;

    const resultFromServices = await updateFromServices({ oldTask, newTask });
    req.userInfor = resultFromServices;

    if (resultFromServices.code) return next(resultFromServices);

    return res.status(status.OK).json(resultFromServices);
  } catch (err) {
    next(err);
  }
};

module.exports = create;
