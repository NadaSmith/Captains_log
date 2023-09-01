const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // If you want to add CSS later

// Set up your routes
const logsController = require('./controllers/logs');
app.use('/logs', logsController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
