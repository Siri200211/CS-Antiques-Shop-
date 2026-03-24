-- Add new admin user to the database
INSERT INTO AdminUsers (email, password, role, isActive, createdAt)
VALUES ('siri@gmail.com', '$2a$10$fuRtjWz4JjLyUj6akAycGOguoLGA8103iQedAtAFCuUTXJbzTK2p.', 'admin', 1, GETDATE());

-- Verify the user was added
SELECT id, email, role, isActive FROM AdminUsers WHERE email = 'siri@gmail.com';
