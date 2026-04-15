-- Fix products with /uploads/undefined mainImage
-- This was caused by uploading with memoryStorage before filename was generated

UPDATE Products
SET mainImage = NULL
WHERE mainImage = '/uploads/undefined';

-- Verify the fix
SELECT COUNT(*) as broken_count
FROM Products
WHERE mainImage = '/uploads/undefined';

-- Show all products with NULL or specific images
SELECT id, name, mainImage
FROM Products
ORDER BY id DESC;
