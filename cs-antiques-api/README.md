# CS Antiques API (Node.js + MSSQL)

## Quick start

1. Copy `.env.example` to `.env` and fill DB/JWT values.
2. Run SQL bootstrap script: `sql/init.sql`.
3. Install dependencies:
   - `npm install`
4. Start API:
   - `npm run dev`

API base URL: `http://localhost:5000`

## Main routes

- `GET /api/health`
- `POST /api/auth/login`
- `GET /api/products`
- `POST /api/products` (auth)
- `PUT /api/products/:id` (auth)
- `DELETE /api/products/:id` (auth)
- `GET /api/team`
- `POST /api/team` (auth)
- `GET /api/site-settings`
- `PUT /api/site-settings` (auth)

## Admin login (`POST /api/auth/login`)

Logins use the **`AdminUsers`** table (`email`, `[password]` bcrypt hash, `role`, `isActive`).  
The optional `Users` table from `sql/init.sql` is not used for sign-in unless you add matching code.

If the UI demo account fails, run `sql/update-demo-password.sql` once to set `test@csantiques.com` to password `TestPassword123!`.

### Create or reset an admin user

Generate a bcrypt hash:

```bash
node -e "const b=require('bcryptjs'); b.hash('YourPasswordHere',10).then(console.log)"
```

Insert into `AdminUsers`:

```sql
INSERT INTO AdminUsers (email, [password], role, isActive, createdAt, updatedAt)
VALUES (N'you@example.com', N'<PASTE_HASH>', N'admin', 1, GETDATE(), GETDATE());
```
