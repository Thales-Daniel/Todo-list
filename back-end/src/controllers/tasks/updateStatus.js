const updateStatusFromServices = require('../../services/tasks/updateStatus');
const { status } = require('../../helpers/messagesAndStatus');

const create = async (req, res, next) => {
  try {
    const { id, newStatus } = req.body;

    const resultFromServices = await updateStatusFromServices({ id, newStatus });

    if (resultFromServices.code) return next(resultFromServices);

    return res.status(status.OK).json(resultFromServices);
  } catch (err) {
    next(err);
  }
};

module.exports = create;
