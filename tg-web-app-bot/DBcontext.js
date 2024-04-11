const Pool = require('pg').Pool
const pool = new Pool(  {
    user: "postgres",
    password: "fulful89",
    host: "26.26.58.212",
    port: "5432",
    database: "TestBot"
})

module.exports = pool