const express = require('express');
const routes = require('./routes'); 

const app = express();
const port = 7500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount the routes
app.use('/employees', routes); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
