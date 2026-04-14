/**
 * Seed Products into Database
 * Run: node sql/seed-products.js
 */

const { getPool, sql } = require("../src/config/db");

const sampleProducts = [
  {
    name: "Antique Pettagam - Teak Wood",
    category: "Pettagams",
    price: 975000,
    originalPrice: 1200000,
    description: "Traditional Sri Lankan storage chest with intricate carvings and hand-polished finish",
    condition: "Pristine",
    mainImage: "/images/products/col1.jpeg",
  },
  {
    name: "Vintage Gramophone - Classic Design",
    category: "Gramophones",
    price: 850000,
    originalPrice: 1050000,
    description: "Working vintage gramophone with authentic sound quality",
    condition: "Fully Restored",
    mainImage: "/images/products/col2.jpeg",
  },
  {
    name: "Ornate Antique Mirror",
    category: "Antique Cabinets",
    price: 125000,
    originalPrice: 180000,
    description: "Gold-framed mirror with decorative elements from the 1920s",
    condition: "Well-Preserved",
    mainImage: "/images/products/col3.jpeg",
  },
  {
    name: "Pocket Watch - Swiss Movement",
    category: "Timepieces",
    price: 68000,
    originalPrice: 95000,
    description: "Authentic Swiss pocket watch with original case and chain",
    condition: "Good Condition",
    mainImage: "/images/products/col4.jpeg",
  },
  {
    name: "Reproduction Pettagam",
    category: "Pettagams",
    price: 450000,
    originalPrice: 550000,
    description: "Faithfully recreated traditional pettagam for modern homes",
    condition: "brand new",
    mainImage: "/images/products/col5.jpeg",
  },
  {
    name: "Wooden Display Cabinet",
    category: "Antique Cabinets",
    price: 145000,
    originalPrice: 200000,
    description: "Vintage wooden cabinet with glass doors and original hardware",
    condition: "Fully Restored",
    mainImage: "/images/products/col6.jpeg",
  },
  {
    name: "Antique Telescope",
    category: "Scientific Instruments",
    price: 280000,
    originalPrice: 380000,
    description: "Brass telescope from the 1800s with leather case",
    condition: "Pristine",
    mainImage: "/images/products/col7.jpeg",
  },
  {
    name: "Victorian Jewelry Box",
    category: "Storage",
    price: 95000,
    originalPrice: 140000,
    description: "Hand-carved wooden box with velvet lining and mirror",
    condition: "Well-Preserved",
    mainImage: "/images/products/col8.jpeg",
  },
  {
    name: "Antique Gramophone Horn",
    category: "Gramophones",
    price: 320000,
    originalPrice: 420000,
    description: "Original brass horn for vintage gramophone",
    condition: "Good Condition",
    mainImage: "/images/products/col9.jpeg",
  },
  {
    name: "Mahogany Side Table",
    category: "Furniture",
    price: 185000,
    originalPrice: 280000,
    description: "Solid mahogany table with intricate leg design from the Victorian era",
    condition: "Well-Preserved",
    mainImage: "/images/products/col10.jpeg",
  },
  {
    name: "Antique Writing Desk",
    category: "Furniture",
    price: 520000,
    originalPrice: 750000,
    description: "Secretary desk with multiple drawers and secret compartments",
    condition: "Fully Restored",
    mainImage: "/images/products/col11.jpeg",
  },
  {
    name: "Decorative Wall Clock",
    category: "Clocks",
    price: 142000,
    originalPrice: 200000,
    description: "Hand-painted wall clock with pendulum movement",
    condition: "Pristine",
    mainImage: "/images/products/col12.jpeg",
  },
  {
    name: "Antique Oil Lamp",
    category: "Lighting",
    price: 78000,
    originalPrice: 120000,
    description: "Brass oil lamp with original glass shade and wick",
    condition: "Good Condition",
    mainImage: "/images/products/col13.jpeg",
  },
  {
    name: "Fiber Antique Pettagam",
    category: "Pettagams",
    price: 280000,
    originalPrice: 380000,
    description: "Modern reproduction with traditional carvings",
    condition: "brand new",
    mainImage: "/images/products/col14.jpeg",
  },
  {
    name: "Picture Frame Collection",
    category: "Decorative",
    price: 65000,
    originalPrice: 95000,
    description: "Set of three vintage wooden frames with glass and backing",
    condition: "Well-Preserved",
    mainImage: "/images/products/col15.jpeg",
  },
  {
    name: "Antique Candlestick Holder",
    category: "Lighting",
    price: 54000,
    originalPrice: 85000,
    description: "Pair of brass candlesticks with ornate base",
    condition: "Pristine",
    mainImage: "/images/products/col16.jpeg",
  },
  {
    name: "Music Box - Mechanism Works",
    category: "Music",
    price: 195000,
    originalPrice: 280000,
    description: "Swiss movement music box with original key and original tune",
    condition: "Fully Restored",
    mainImage: "/images/products/col17.jpeg",
  },
  {
    name: "Vintage Wooden Box",
    category: "Storage",
    price: 72000,
    originalPrice: 110000,
    description: "Handcrafted wooden box with brass latch and handle",
    condition: "Good Condition",
    mainImage: "/images/products/col18.jpeg",
  },
  {
    name: "Antique Spice Box",
    category: "Storage",
    price: 98000,
    originalPrice: 150000,
    description: "Traditional Sri Lankan spice box with multiple compartments",
    condition: "Fully Restored",
    mainImage: "/images/products/col19.jpeg",
  },
];

async function seedDatabase() {
  try {
    console.log("🌱 Starting database seed...");
    const pool = await getPool();

    // Count existing products
    const countResult = await pool.request().query("SELECT COUNT(*) as cnt FROM Products");
    const existingCount = countResult.recordset[0].cnt;
    console.log(`📊 Found ${existingCount} existing products`);

    // Insert each product
    let insertedCount = 0;
    for (const product of sampleProducts) {
      const result = await pool
        .request()
        .input("name", sql.NVarChar(255), product.name)
        .input("category", sql.NVarChar(120), product.category || null)
        .input("price", sql.Decimal(18, 2), product.price)
        .input("originalPrice", sql.Decimal(18, 2), product.originalPrice || null)
        .input("description", sql.NVarChar(sql.MAX), product.description || null)
        .input("condition", sql.NVarChar(120), product.condition || null)
        .input("mainImage", sql.NVarChar(500), product.mainImage || null)
        .query(`
          INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
          VALUES (@name, @category, @price, @originalPrice, @description, @condition, @mainImage)
        `);

      if (result.rowsAffected[0] === 1) {
        insertedCount++;
        console.log(`✅ Added: ${product.name}`);
      }
    }

    console.log(`\n🎉 Successfully inserted ${insertedCount} products!\n`);

    // Show summary
    const summaryResult = await pool.request().query(`
      SELECT 
        COUNT(*) as total_products,
        COUNT(DISTINCT category) as total_categories,
        MIN(price) as min_price,
        MAX(price) as max_price
      FROM Products
    `);

    const stats = summaryResult.recordset[0];
    console.log("📈 Database Summary:");
    console.log(`   Total Products: ${stats.total_products}`);
    console.log(`   Categories: ${stats.total_categories}`);
    console.log(`   Price Range: Rs.${stats.min_price?.toLocaleString()} - Rs.${stats.max_price?.toLocaleString()}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run seed
seedDatabase();
