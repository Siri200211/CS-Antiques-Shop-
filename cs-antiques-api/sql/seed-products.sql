/*
Seed script to populate Products table with sample data
Run this against your MS SQL database to add all products
*/

-- Clear existing products (optional - comment out if you want to keep existing ones)
-- DELETE FROM Products;

-- Insert sample products
INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage, createdAt)
VALUES
  ('Antique Pettagam - Teak Wood', 'Pettagams', 975000, 1200000, 'Traditional Sri Lankan storage chest with intricate carvings and hand-polished finish', 'Pristine', '/images/products/col1.jpeg', SYSUTCDATETIME()),
  ('Vintage Gramophone - Classic Design', 'Gramophones', 850000, 1050000, 'Working vintage gramophone with authentic sound quality', 'Fully Restored', '/images/products/col2.jpeg', SYSUTCDATETIME()),
  ('Ornate Antique Mirror', 'Antique Cabinets', 125000, 180000, 'Gold-framed mirror with decorative elements from the 1920s', 'Well-Preserved', '/images/products/col3.jpeg', SYSUTCDATETIME()),
  ('Pocket Watch - Swiss Movement', 'Timepieces', 68000, 95000, 'Authentic Swiss pocket watch with original case and chain', 'Good Condition', '/images/products/col4.jpeg', SYSUTCDATETIME()),
  ('Reproduction Pettagam', 'Pettagams', 450000, 550000, 'Faithfully recreated traditional pettagam for modern homes', 'brand new', '/images/products/col5.jpeg', SYSUTCDATETIME()),
  ('Wooden Display Cabinet', 'Antique Cabinets', 145000, 200000, 'Vintage wooden cabinet with glass doors and original hardware', 'Fully Restored', '/images/products/col6.jpeg', SYSUTCDATETIME()),
  ('Antique Telescope', 'Scientific Instruments', 280000, 380000, 'Brass telescope from the 1800s with leather case', 'Pristine', '/images/products/col7.jpeg', SYSUTCDATETIME()),
  ('Victorian Jewelry Box', 'Storage', 95000, 140000, 'Hand-carved wooden box with velvet lining and mirror', 'Well-Preserved', '/images/products/col8.jpeg', SYSUTCDATETIME()),
  ('Antique Gramophone Horn', 'Gramophones', 320000, 420000, 'Original brass horn for vintage gramophone', 'Good Condition', '/images/products/col9.jpeg', SYSUTCDATETIME()),
  ('Mahogany Side Table', 'Furniture', 185000, 280000, 'Solid mahogany table with intricate leg design from the Victorian era', 'Well-Preserved', '/images/products/col10.jpeg', SYSUTCDATETIME()),
  ('Antique Writing Desk', 'Furniture', 520000, 750000, 'Secretary desk with multiple drawers and secret compartments', 'Fully Restored', '/images/products/col11.jpeg', SYSUTCDATETIME()),
  ('Decorative Wall Clock', 'Clocks', 142000, 200000, 'Hand-painted wall clock with pendulum movement', 'Pristine', '/images/products/col12.jpeg', SYSUTCDATETIME()),
  ('Antique Oil Lamp', 'Lighting', 78000, 120000, 'Brass oil lamp with original glass shade and wick', 'Good Condition', '/images/products/col13.jpeg', SYSUTCDATETIME()),
  ('Fiber Antique Pettagam', 'Pettagams', 280000, 380000, 'Modern reproduction with traditional carvings', 'brand new', '/images/products/col14.jpeg', SYSUTCDATETIME()),
  ('Picture Frame Collection', 'Decorative', 65000, 95000, 'Set of three vintage wooden frames with glass and backing', 'Well-Preserved', '/images/products/col15.jpeg', SYSUTCDATETIME()),
  ('Antique Candlestick Holder', 'Lighting', 54000, 85000, 'Pair of brass candlesticks with ornate base', 'Pristine', '/images/products/col16.jpeg', SYSUTCDATETIME()),
  ('Music Box - Mechanism Works', 'Music', 195000, 280000, 'Swiss movement music box with original key and original tune', 'Fully Restored', '/images/products/col17.jpeg', SYSUTCDATETIME()),
  ('Vintage Wooden Box', 'Storage', 72000, 110000, 'Handcrafted wooden box with brass latch and handle', 'Good Condition', '/images/products/col18.jpeg', SYSUTCDATETIME()),
  ('Antique Spice Box', 'Storage', 98000, 150000, 'Traditional Sri Lankan spice box with multiple compartments', 'Fully Restored', '/images/products/col19.jpeg', SYSUTCDATETIME());

-- Verify the insert
SELECT COUNT(*) as 'Total Products', COUNT(DISTINCT category) as 'Categories' FROM Products;
SELECT * FROM Products ORDER BY id DESC;
