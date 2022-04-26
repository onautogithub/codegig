const express = require('express');
const router = express.Router();
const gigController = require('../services/controller/gigController');

router.post('/', gigController.addGig);
router.get('/', gigController.findGigs);
router.get('/:id', gigController.findGigById);
router.put('/:id', gigController.updateGig);
router.delete('/:id', gigController.deleteById);

module.exports = router;