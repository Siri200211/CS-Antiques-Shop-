-- Create AdminUsers table if it doesn't exist
IF OBJECT_ID('AdminUsers', 'U') IS NULL
BEGIN
  CREATE TABLE AdminUsers (
    id INT IDENTITY(1,1) PRIMARY KEY,
    email NVARCHAR(255) NOT NULL UNIQUE,
    fullName NVARCHAR(255) NULL,
    role NVARCHAR(50) NOT NULL DEFAULT 'admin',
    [password] NVARCHAR(255) NOT NULL,
    isActive BIT NOT NULL DEFAULT 1,
    createdAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    updatedAt DATETIME2 NULL
  );
  
  PRINT 'AdminUsers table created successfully'
END
ELSE
BEGIN
  PRINT 'AdminUsers table already exists'
END

-- Check if demo user exists, if not insert it
IF NOT EXISTS (SELECT 1 FROM AdminUsers WHERE email = N'test@csantiques.com')
BEGIN
  INSERT INTO AdminUsers (email, fullName, role, [password], isActive, createdAt)
  VALUES (
    N'test@csantiques.com',
    N'Test Admin',
    N'admin',
    N'$2b$10$TENm9ZLaH907h9tKN3P3PeLqrhzwaIGdvrPtMbN5yQA/hCtm5s00m',  -- Password: TestPassword123!
    1,
    SYSUTCDATETIME()
  );
  
  PRINT 'Demo admin user (test@csantiques.com) inserted'
END
ELSE
BEGIN
  PRINT 'Demo admin user already exists'
END

-- Display admin users
SELECT id, email, fullName, role, isActive, createdAt FROM AdminUsers;
