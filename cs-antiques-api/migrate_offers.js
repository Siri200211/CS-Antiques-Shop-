const sql = require('mssql');
const env = require('./src/config/env'); // local db config from env

const localConfig = env.db; // Should be pointing to localhost based on current .env
const azureConfig = {
  user: 'dbadmin',
  password: 'Siri@200221',
  server: 'csantiques-server.database.windows.net',
  database: 'cs_antiques_db',
  options: { encrypt: true, trustServerCertificate: false }
};

async function migrateData() {
  try {
    console.log("Connecting to local DB...");
    const localPool = await sql.connect(localConfig);
    const localRes = await localPool.request().query("SELECT * FROM Offers");
    const offers = localRes.recordset;
    console.log(`Found ${offers.length} offers locally.`);
    await localPool.close();

    console.log("Connecting to Azure DB...");
    const azurePool = await sql.connect(azureConfig);
    
    for (const offer of offers) {
      console.log(`Migrating offer: ${offer.title}`);
      await azurePool.request()
        .input("title", sql.NVarChar(255), offer.title)
        .input("description", sql.NVarChar(sql.MAX), offer.description)
        .input("imageUrl", sql.NVarChar(sql.MAX), offer.imageUrl)
        .input("promoCode", sql.NVarChar(50), offer.promoCode)
        .input("discount", sql.Int, offer.discount)
        .input("validFrom", sql.DateTime, offer.validFrom)
        .input("validUntil", sql.DateTime, offer.validUntil)
        .input("isActive", sql.Bit, offer.isActive)
        .input("createdBy", sql.Int, offer.createdBy || 1)
        .query(`
          INSERT INTO Offers (title, description, imageUrl, promoCode, discount, validFrom, validUntil, isActive, createdBy, createdAt, updatedAt)
          VALUES (@title, @description, @imageUrl, @promoCode, @discount, @validFrom, @validUntil, @isActive, @createdBy, GETUTCDATE(), GETUTCDATE())
        `);
    }

    console.log("Migration complete!");
    await azurePool.close();
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

migrateData();
