const express = require('express');

const router = express.Router({ mergeParams: true });

const tasksCreateController = require('../controllers/tasks/create');
const getAllFromController = require('../controllers/tasks/getAll');
const updateFromController = require('../controllers/tasks/update');

router.post('/', tasksCreateController);
router.get('/', getAllFromController);
router.put('/', updateFromController);

module.exports = router;
