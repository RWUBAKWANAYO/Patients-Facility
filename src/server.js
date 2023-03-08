const express = require('express');

server = express();

const port = process.env.SERVER_PORT || 8080;

server.get('/', (req, res) => res.send('Welcome to patient facility!'));

server.listen(port, () => console.log(`Server is rinning on PORT ${port}`));
