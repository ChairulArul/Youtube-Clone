const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs"); // Import bcrypt untuk hashing password
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "youtube_clone",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

// Endpoint untuk login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Email and password are required." });
  }

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).send({ error: "Database query failed." });
    }
    if (results.length === 0) {
      return res.status(404).send({ error: "User not found." });
    }

    // Verifikasi password yang di-hash
    bcrypt.compare(password, results[0].password, (err, isMatch) => {
      if (err) {
        return res.status(500).send({ error: "Password verification failed." });
      }
      if (!isMatch) {
        return res.status(401).send({ error: "Incorrect password." });
      }

      res.status(200).send({ message: "Login successful", user: results[0] });
    });
  });
});

// Endpoint untuk registrasi
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: "All fields are required." });
  }

  // Validasi email dengan regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ error: "Invalid email format." });
  }

  // Hash password sebelum disimpan
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send({ error: "Error hashing password." });
    }

    // Simpan data user ke database
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, hashedPassword], (err, results) => {
      if (err) {
        return res.status(500).send({ error: "Database query failed." });
      }
      res.status(201).send({ message: "Registration successful." });
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
