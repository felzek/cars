const {Pool} = require('pg');

  module.exports=  new Pool({
    password: process.env.POSTGRES_PASSWORD || "pass",
    user: process.env.POSTGRES_USER || "samcart",
    host: process.env.DB_HOST || "localhost",
    port: process.env.PORTS || "35432",
    database:"samcart"
  });