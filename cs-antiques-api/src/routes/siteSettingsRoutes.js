const express = require("express");
const { z } = require("zod");
const { getPool, sql } = require("../config/db");
const { requireAuth } = require("../middleware/auth");

const router = express.Router();

const siteSettingsSchema = z.object({
  settingKey: z.string().min(1),
  settingValue: z.string().nullable().optional(),
});

router.get("/", async (_req, res, next) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query(`
      SELECT settingKey, settingValue
      FROM SiteSettings
      ORDER BY settingKey ASC
    `);

    return res.json({ success: true, data: result.recordset });
  } catch (error) {
    return next(error);
  }
});

router.put("/", requireAuth, async (req, res, next) => {
  try {
    const parsed = z.array(siteSettingsSchema).safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Invalid settings payload" });
    }

    const pool = await getPool();
    for (const item of parsed.data) {
      await pool
        .request()
        .input("settingKey", sql.NVarChar(120), item.settingKey)
        .input("settingValue", sql.NVarChar(sql.MAX), item.settingValue ?? null)
        .query(`
          MERGE SiteSettings AS target
          USING (SELECT @settingKey AS settingKey, @settingValue AS settingValue) AS source
          ON target.settingKey = source.settingKey
          WHEN MATCHED THEN
            UPDATE SET settingValue = source.settingValue
          WHEN NOT MATCHED THEN
            INSERT (settingKey, settingValue) VALUES (source.settingKey, source.settingValue);
        `);
    }

    return res.json({ success: true, message: "Settings updated" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
