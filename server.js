const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

let port = process.env.PORT || 5000;

const server = express();

// Middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('Connected!');
});

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
