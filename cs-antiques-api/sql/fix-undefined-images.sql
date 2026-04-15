-- Fix products with /uploads/undefined mainImage
-- This was caused by uploading with memoryStorage before filename was generated
-- Products will revert to using placeholder images or bundled assets

UPDATE Products
SET mainImage = NULL
WHERE mainImage = '/uploads/undefined' OR mainImage LIKE '/uploads/undefined%';

-- Verify the fix
SELECT COUNT(*) as broken_count
FROM Products
WHERE mainImage = '/uploads/undefined';

-- Show products with NULL mainImage (they'll use placeholder)
SELECT id, name, mainImage
FROM Products
WHERE mainImage IS NULL
ORDER BY id DESC;

-- Show products with valid images
SELECT id, name, mainImage
FROM Products
WHERE mainImage IS NOT NULL
ORDER BY id DESC;

