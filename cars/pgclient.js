const {Client} = require('pg');

const pgclient = new Client({
    password: "pass",
    user: "samcart",
    host: "localhost",
    port: "35432"
  });

  module.exports= pgclient;
  