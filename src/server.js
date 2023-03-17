const express = require('express');
const routes = require('./routes/index');
server = express();

const port = process.env.SERVER_PORT || 8080;

// Main route
server.use('/api/v1', routes);

server.listen(port, () => console.log(`Server is running on PORT ${port}`));
