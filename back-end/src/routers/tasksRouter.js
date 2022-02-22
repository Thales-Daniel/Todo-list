const express = require('express');

const router = express.Router({ mergeParams: true });

const tasksCreateController = require('../controllers/tasks/create');
const getAllFromController = require('../controllers/tasks/getAll');
const updateFromController = require('../controllers/tasks/update');
const deleteFromController = require('../controllers/tasks/delete');
const updateStatusFromController = require('../controllers/tasks/updateStatus');

router.post('/', tasksCreateController);
router.get('/', getAllFromController);
router.put('/', updateFromController);
router.delete('/:id', deleteFromController);
router.put('/updateStatus', updateStatusFromController);

module.exports = router;
