const Pool = require('pg').Pool
const pool = new Pool(  {
    user: "postgres",
    password: "tagil2012",
    host: "26.31.95.127",
    port: "5432",
    database: "TestBot"
})

module.exports = pool