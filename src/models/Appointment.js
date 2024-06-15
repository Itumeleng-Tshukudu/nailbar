const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  phone: String,
  date: Date,
  nailTech: String,
  style: String,
  confirmed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
