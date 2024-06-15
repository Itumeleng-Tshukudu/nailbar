const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api/appointments', appointmentRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bontles-nailbar', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/book', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'book.html'));
});

app.get('/styles', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'styles.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
