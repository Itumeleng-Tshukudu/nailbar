const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Routes
router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAppointments);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;