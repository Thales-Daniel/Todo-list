const createFromServices = require('../../services/tasks/create');
const { status } = require('../../helpers/messagesAndStatus');

const create = async (req, res, next) => {
  try {
    const { task } = req.body;

    const resultFromServices = await createFromServices(task);
    req.id = resultFromServices;

    if (resultFromServices.code) return next(resultFromServices);

    return res.status(status.CREATED).json(resultFromServices);
  } catch (err) {
    next(err);
  }
};

module.exports = create;
