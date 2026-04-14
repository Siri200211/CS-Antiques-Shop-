const { getPool, sql } = require("./src/config/db");
const fs = require("fs");
const path = require("path");

async function runMigration() {
  try {
    console.log("🔄 Connecting to database...");
    const pool = await getPool();

    console.log("✅ Connected successfully");

    // Read the SQL migration file
    const sqlPath = path.join(__dirname, "sql", "add-offers-table.sql");
    const sqlQuery = fs.readFileSync(sqlPath, "utf-8");

    console.log("📝 Executing migration...");
    await pool.request().query(sqlQuery);

    console.log("✅ Migration completed successfully!");
    console.log("✨ Offers table created with indexes");

    process.exit(0);
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

runMigration();
