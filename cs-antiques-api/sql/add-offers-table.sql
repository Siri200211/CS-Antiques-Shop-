-- Add Offers/Promotions Table
IF OBJECT_ID('Offers', 'U') IS NULL
BEGIN
  CREATE TABLE Offers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX) NULL,
    imageUrl NVARCHAR(500) NOT NULL,
    promoCode NVARCHAR(50) NULL,
    discount INT NULL,
    validFrom DATETIME2 NOT NULL,
    validUntil DATETIME2 NOT NULL,
    isActive BIT NOT NULL DEFAULT 1,
    createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updatedAt DATETIME2 NULL,
    createdBy INT NULL,
    FOREIGN KEY (createdBy) REFERENCES Users(id)
  );
  
  CREATE INDEX idx_offers_active ON Offers(isActive);
  CREATE INDEX idx_offers_dates ON Offers(validFrom, validUntil);
END
