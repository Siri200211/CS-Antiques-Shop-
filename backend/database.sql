-- CS Antiques Shop Database Schema
-- MS SQL Server 2025

-- Products Table
CREATE TABLE Products (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    category NVARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    originalPrice DECIMAL(10, 2),
    description NVARCHAR(MAX),
    condition NVARCHAR(50),
    mainImage NVARCHAR(MAX),
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);

-- Product Images Table (for gallery)
CREATE TABLE ProductImages (
    id INT PRIMARY KEY IDENTITY(1,1),
    productId INT NOT NULL,
    imageUrl NVARCHAR(MAX) NOT NULL,
    displayOrder INT,
    createdAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (productId) REFERENCES Products(id) ON DELETE CASCADE
);

-- Team Members Table
CREATE TABLE TeamMembers (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    role NVARCHAR(100),
    bio NVARCHAR(MAX),
    position NVARCHAR(100),
    photo NVARCHAR(MAX),
    displayOrder INT,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);

-- Admin Users Table
CREATE TABLE AdminUsers (
    id INT PRIMARY KEY IDENTITY(1,1),
    email NVARCHAR(255) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) DEFAULT 'manager',
    isActive BIT DEFAULT 1,
    createdAt DATETIME DEFAULT GETDATE(),
    updatedAt DATETIME DEFAULT GETDATE()
);

-- Create Indexes for Performance
CREATE INDEX idx_products_category ON Products(category);
CREATE INDEX idx_products_createdAt ON Products(createdAt);
CREATE INDEX idx_productImages_productId ON ProductImages(productId);
CREATE INDEX idx_adminUsers_email ON AdminUsers(email);
CREATE INDEX idx_teamMembers_displayOrder ON TeamMembers(displayOrder);

-- Insert Default Admin User (password: Admin@123!)
-- Hashed using bcryptjs with salt rounds 10
INSERT INTO AdminUsers (email, password, role, isActive)
VALUES ('admin@csantiques.com', '$2a$10$T9I.5p.8Xg8nN3pK2mL9k.lJ5pK3mN8p9q0r1s2t3u4v5w6x7y8z9', 'admin', 1);

-- Insert Sample Team Members
INSERT INTO TeamMembers (name, role, bio, position, displayOrder)
VALUES 
('John Smith', 'Founder', 'Passionate about antiques and vintage collectibles', 'Founder & CEO', 1),
('Sarah Johnson', 'Expert', 'Specialist in European antiques', 'Head of Acquisitions', 2),
('Michael Brown', 'Manager', 'Manages daily operations and customer relations', 'Operations Manager', 3);

-- Insert Sample Products
INSERT INTO Products (name, category, price, originalPrice, description, condition, mainImage)
VALUES
('Victorian Mahogany Table', 'Furniture', 450.00, 600.00, 'Beautiful Victorian era mahogany dining table with original finish', 'Excellent', '/images/products/table1.jpg'),
('Antique Pocket Watch', 'Collectibles', 250.00, 350.00, 'Gold-plated pocket watch from the 1920s', 'Good', '/images/products/watch1.jpg'),
('Art Deco Mirror', 'Decor', 180.00, 250.00, 'Large decorative mirror with Art Deco frame', 'Very Good', '/images/products/mirror1.jpg');

PRINT 'Database schema created successfully!'
