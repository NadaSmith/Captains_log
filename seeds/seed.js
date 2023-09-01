const mongoose = require('mongoose');
const Log = require('../models/log'); // Adjust the path as needed

// Define sample log data
const sampleLogs = [
  {
    title: 'Log 1',
    entry: 'This is the first log entry.',
    shipIsBroken: false,
  },
  {
    title: 'Log 2',
    entry: 'Another log entry here.',
    shipIsBroken: true,
  },
  
];

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Insert sample data
Log.insertMany(sampleLogs)
  .then(() => {
    console.log('Sample logs inserted successfully.');
  })
  .catch((error) => {
    console.error('Error inserting sample logs:', error);
  })
  .finally(() => {
    mongoose.connection.close(); // Close the database connection when done
  });
