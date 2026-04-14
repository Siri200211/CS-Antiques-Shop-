const express = require("express");
const { getPool } = require("../config/db");

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    await getPool();
    return res.json({ success: true, message: "API healthy", db: "connected" });
  } catch (_error) {
    return res.status(500).json({ success: false, message: "API unhealthy", db: "disconnected" });
  }
});

module.exports = router;
