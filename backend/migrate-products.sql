-- Migrate all 19 products from frontend to backend database
-- CS Antiques Shop Product Migration

-- Clear existing products (keep sample data for reference)
-- DELETE FROM Products; -- Uncomment if you want to start fresh

-- Insert all 19 products
INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
VALUES
-- Product 1
('Dutch Box', 'Decorative', 135000, 150000, 'Elegant dutch wooden box with brass inlays', 'Brand New', '/images/products/col1.jpeg'),

-- Product 2
('Ath Paththaray', 'Decorative', 28500, 34000, 'Traditional brass water vessel with intricate carvings', 'Well-Preserved', '/images/products/col2.jpeg'),

-- Product 3
('Brass Lamp Shade', 'Lighting', 78000, 105000, 'Art Deco brass table lamp with silk shade', 'Fully Restored', '/images/products/col3.jpeg'),

-- Product 4
('Pettagama with Wooden Horse, Gramophone & Wooden Mirror', 'Antique Collection', 350000, NULL, 'Rare combination collection featuring wooden pettagama, gramophone, and ornate wooden mirror', 'Excellent', '/images/products/col4.jpeg'),

-- Product 5
('Ebony Wood Brand New Kavichchiya', 'Premium Furniture', 1275000, 1385000, 'Premium wooden pettagam with intricate design', 'Brand new', '/images/products/col5.jpeg'),

-- Product 6
('Original Antique Writing Biro Cupboard', 'Furniture', 495000, 540000, 'original antique burma teak wood and ebony wood writing biro cupboard', 'Pristine', '/images/products/col6.jpeg'),

-- Product 7
('Gramophone', 'Music', 29000, 38000, 'Vintage gramophone with ornate wooden body, fully functional', 'Fully Functional', '/images/products/col7.jpeg'),

-- Product 8
('Original Antique Pettagama', 'Furniture', 97000, 108000, 'Intricately carved teak panel with traditional motifs', 'Fully Restored', '/images/products/col8.jpeg'),

-- Product 9
('Ebony Wood Premium Most Valuable Kavichchiya', 'Premium Furniture', 1800000, 1985000, 'Exceptionally rare ebony wood furniture piece, hand-carved with premium craftsmanship', 'Excellent', '/images/products/col9.jpeg'),

-- Product 10
('Rose Wood Original Antique Cupboard', 'Furniture', 345000, 385000, 'Original antique rose wood cupboard with traditional hand-carved details', 'Pristine', '/images/products/col10.jpeg'),

-- Product 11
('Table Cupboard', 'Furniture', 135000, 152000, 'Intricately carved teak panel with traditional motifs', 'Well-Preserved', '/images/products/col11.jpeg'),

-- Product 12
('Jack Wood Premium Kavichchiya', 'Furniture', 195000, 225000, 'Intricately carved teak panel with traditional motifs', 'brand new', '/images/products/col12.jpeg'),

-- Product 13
('Jack Wood Original Antique Dressing Table', 'Art', 145000, 170000, 'Intricately carved teak panel with traditional motifs', 'Fully Restored', '/images/products/col13.jpeg'),

-- Product 14
('Teak Wood Grand Father Chair', 'Art', 68000, 76000, 'Intricately carved teak panel with traditional motifs', 'Good Condition', '/images/products/col14.jpeg'),

-- Product 15
('Premium Showcase Cupboard Jack Wood', 'Furniture', 235000, 255000, 'Intricately carved teak panel with traditional motifs', 'Pristine', '/images/products/col15.jpeg'),

-- Product 16
('Dutch Box', 'Art', 58000, 65000, 'Intricately carved teak panel with traditional motifs', ' brand new', '/images/products/col16.jpeg'),

-- Product 17
('Original Antique Tea Trolly', 'Art', 125000, 155000, 'Intricately carved teak panel with traditional motifs', 'Well-Preserved', '/images/products/col17.jpeg'),

-- Product 18
('White Siyambala Wood Rare Design Coffee Table', 'Art', 135000, 152000, 'Intricately carved teak panel with traditional motifs', 'Fully Restored', '/images/products/col18.jpeg'),

-- Product 19
('White Siyambala Wood Rare Design Kavichchiya', 'Art', 975000, 1080000, 'Intricately carved teak panel with traditional motifs', 'Pristine', '/images/products/col19.jpeg');

PRINT 'All 19 products migrated successfully!';
