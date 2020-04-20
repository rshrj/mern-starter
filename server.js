const express = require('express');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

// Setup API routes
app.use('/api/icecream', require('./routes/api/icecream'));

// Configure Production environment to server React build
if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Set port and start listening
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Express listening on port ${port}`));
