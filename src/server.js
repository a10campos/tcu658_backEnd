const express = require ("express");

const server = express();

const levelsRoutes = require("./routes/levels");

server.use(levelsRoutes);


server.listen(3000)
console.log('Server on port: ' ,3000);
