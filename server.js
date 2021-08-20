'use strict';

const express = require('express');
const server = express();


// *********** routes
server.get('/', (req, res) => {
  res.send("Francis Nwabueze")
})

// ****** App Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
  console.log('app started at port '+ PORT);
});

