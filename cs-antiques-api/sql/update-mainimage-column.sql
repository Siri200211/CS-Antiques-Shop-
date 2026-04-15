-- Increase mainImage column size to support base64 data URLs
-- Base64 images can be quite large (typically 50KB - 1MB)
-- NVARCHAR(MAX) can store up to 2GB of data

ALTER TABLE Products
ALTER COLUMN mainImage NVARCHAR(MAX) NULL;

-- Verify the change
SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'Products' AND COLUMN_NAME = 'mainImage';

-- Show first few products to verify they still have their image data
SELECT TOP 5 id, name, mainImage
FROM Products
ORDER BY id DESC;
