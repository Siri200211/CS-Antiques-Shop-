import * as sql from 'mssql';
export declare const initializeDatabase: () => Promise<sql.ConnectionPool | null>;
export declare const getPool: () => sql.ConnectionPool;
export declare const closeDatabase: () => Promise<void>;
export default sql;
//# sourceMappingURL=database.d.ts.map