const express = require("express");
const db = require("./db"); // Koneksi database
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!email.endsWith("@gmail.com")) {
    return res
      .status(400)
      .json({ message: "Invalid email format. Use @gmail.com" });
  }

  const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({ message: "Failed to register user." });
    }
    res
      .status(200)
      .json({ success: true, message: "User registered successfully!" });
  });
});

module.exports = router;
