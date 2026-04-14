/*
Run this script against your MS SQL database.
Adjust names/types if your existing schema already exists.
*/

IF OBJECT_ID('Users', 'U') IS NULL
BEGIN
  CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    fullName NVARCHAR(255) NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'manager',
    passwordHash VARCHAR(255) NOT NULL,
    isActive BIT NOT NULL DEFAULT 1,
    createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
  );
END

IF OBJECT_ID('Products', 'U') IS NULL
BEGIN
  CREATE TABLE Products (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(255) NOT NULL,
    category NVARCHAR(120) NULL,
    price DECIMAL(18,2) NOT NULL,
    originalPrice DECIMAL(18,2) NULL,
    description NVARCHAR(MAX) NULL,
    condition NVARCHAR(120) NULL,
    mainImage NVARCHAR(500) NULL,
    isDeleted BIT NOT NULL DEFAULT 0,
    createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updatedAt DATETIME2 NULL
  );
END

IF OBJECT_ID('TeamMembers', 'U') IS NULL
BEGIN
  CREATE TABLE TeamMembers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    fullName NVARCHAR(255) NOT NULL,
    role NVARCHAR(120) NOT NULL,
    bio NVARCHAR(MAX) NULL,
    photoUrl NVARCHAR(500) NULL,
    sortOrder INT NOT NULL DEFAULT 0,
    isActive BIT NOT NULL DEFAULT 1
  );
END

IF OBJECT_ID('SiteSettings', 'U') IS NULL
BEGIN
  CREATE TABLE SiteSettings (
    settingKey NVARCHAR(120) PRIMARY KEY,
    settingValue NVARCHAR(MAX) NULL
  );
END
