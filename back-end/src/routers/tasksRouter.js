const express = require('express');

const router = express.Router({ mergeParams: true });

const tasksCreateController = require('../controllers/tasks/create');
const getAllFromController = require('../controllers/tasks/getAll');

router.post('/', tasksCreateController);
router.get('/', getAllFromController);

module.exports = router;
