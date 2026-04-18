const sql = require('mssql');
sql.connect({
  user:'dbadmin',
  password:'Siri@200221',
  server:'csantiques-server.database.windows.net',
  database:'cs_antiques_db',
  options:{encrypt:true,trustServerCertificate:false}
}).then(async pool => {
  const res = await pool.request().query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'Offers'");
  console.log('Columns:', res.recordset.map(r=>r.COLUMN_NAME));
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
