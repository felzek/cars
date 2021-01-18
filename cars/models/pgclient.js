const {Client} = require('pg');

  module.exports=  new Client({
    password: process.env.POSTGRES_PASSWORD || "pass",
    user: process.env.POSTGRES_USER || "samcart",
    host: process.env.HOST || "localhost",
    port: process.env.PORTS || "35432"
  });