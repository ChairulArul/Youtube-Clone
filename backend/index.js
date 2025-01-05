require("dotenv").config();
const express = require("express");
const db = require("./db"); // Koneksi ke database
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      res.status(200).json({ message: "Login berhasil", user: rows[0] });
    } else {
      res.status(401).json({ message: "Email atau password salah" });
    }
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
});

app.get("/", (req, res) => {
  res.send("Server berjalan!");
});

const SignUp = require("./signup");
app.use(express.json());
app.use(SignUp);

// Menjalankan Server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
