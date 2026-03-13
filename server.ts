import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("bookings.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    serviceId TEXT NOT NULL,
    stylistId TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    UNIQUE(stylistId, date, time)
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  
  // Get occupied slots for a specific date and stylist
  app.get("/api/bookings/occupied", (req, res) => {
    const { date, stylistId } = req.query;
    if (!date) return res.status(400).json({ error: "Date is required" });

    let query = "SELECT time FROM bookings WHERE date = ?";
    let params = [date];

    if (stylistId && stylistId !== "") {
      query += " AND stylistId = ?";
      params.push(stylistId as string);
    }

    const rows = db.prepare(query).all(...params) as { time: string }[];
    res.json(rows.map(row => row.time));
  });

  // Admin: Get all bookings
  app.get("/api/admin/bookings", (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM bookings ORDER BY date DESC, time ASC").all();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  // Create a new booking
  app.post("/api/bookings", (req, res) => {
    const { serviceId, stylistId, date, time, name, email, phone } = req.body;

    if (!serviceId || !stylistId || !date || !time || !name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO bookings (serviceId, stylistId, date, time, name, email, phone)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(serviceId, stylistId, date, time, name, email, phone);
      res.status(201).json({ success: true });
    } catch (error: any) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        res.status(409).json({ error: "Dit tijdstip is helaas net bezet geraakt. Kies een ander moment." });
      } else {
        console.error("Database error:", error);
        res.status(500).json({ error: "Er is een fout opgetreden bij het opslaan van je boeking." });
      }
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
