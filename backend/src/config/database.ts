import * as sql from 'mssql';

const config: sql.config = {
  server: process.env.DB_SERVER || 'localhost',
  port: parseInt(process.env.DB_PORT || '1433'),
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || 'Admin@123!',
  database: process.env.DB_NAME,
  authentication: {
    type: 'default',
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
    connectionTimeout: 30000,
    requestTimeout: 30000,
  },
};

let pool: sql.ConnectionPool | null = null;

export const initializeDatabase = async (): Promise<sql.ConnectionPool | null> => {
  try {
    console.log(`🔗 Attempting DB connection: ${config.server}:${config.port}/${config.database} as ${config.user}`);
    pool = new sql.ConnectionPool(config);
    await pool.connect();
    console.log('✅ Database connected successfully!');
    console.log(`📊 Connected to: ${config.server}:${config.port}/${config.database}`);
    return pool;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
};

export const getPool = (): sql.ConnectionPool => {
  if (!pool) {
    throw new Error('Database pool not initialized. Call initializeDatabase first.');
  }
  return pool;
};

export const closeDatabase = async (): Promise<void> => {
  if (pool) {
    await pool.close();
    console.log('✅ Database connection closed');
  }
};

export default sql;
