-- Update Offers table to allow NULL imageUrl
ALTER TABLE Offers
ALTER COLUMN imageUrl NVARCHAR(MAX) NULL;
