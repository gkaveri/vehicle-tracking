/*
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const vehicleData = require('./Data/vehicleData.json');

app.get('/api/vehicle', (req, res) => {
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/
/*
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Change this to any available port if needed

app.use(cors());

const vehicleData = require('./Data/vehicleData.json');

app.get('/api/vehicle', (req, res) => {
  console.log('Request received at /api/vehicle'); // Log request
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());

// Serve static files from the Data directory
app.use(express.static(path.join(__dirname, 'Data')));

const vehicleData = require('./vehicleData.json');

app.get('/api/vehicle', (req, res) => {
  console.log('Request received at /api/vehicle');
  res.json(vehicleData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


