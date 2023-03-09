const express = require('express');

server = express();

const port = process.env.SERVER_PORT || 8080;

// Main route
server.use('api/v1', routes);

server.listen(port, () => console.log(`Server is rinning on PORT ${port}`));
