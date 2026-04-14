-- Sets demo account to password: TestPassword123!
-- Run once if login fails after migrating to AdminUsers.
UPDATE AdminUsers
SET [password] = N'$2b$10$TENm9ZLaH907h9tKN3P3PeLqrhzwaIGdvrPtMbN5yQA/hCtm5s00m',
    updatedAt = GETDATE()
WHERE email = N'test@csantiques.com';
