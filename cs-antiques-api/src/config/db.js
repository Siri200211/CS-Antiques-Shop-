const sql = require("mssql");
const env = require("./env");

let pool;

async function getPool() {
  if (pool) {
    return pool;
  }

  pool = await sql.connect(env.db);
  return pool;
}

module.exports = {
  sql,
  getPool,
};
