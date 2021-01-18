const {Client} = require('pg');

const pgclient = new Client({
    password: "pass",
    user: "samcart",
    host: "postgres",
    port: "35432"
  });
  

  module.exports= pgclient;
  