const deleteFromServices = require('../../services/tasks/delete');
const { status } = require('../../helpers/messagesAndStatus');

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const resultFromServices = await deleteFromServices(id);

    if (resultFromServices.code) return next(resultFromServices);

    return res.status(status.DELETED).end();
  } catch (err) {
    next(err);
  }
};

module.exports = deleteTask;
