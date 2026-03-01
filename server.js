const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const path = require("path");

const app = express();
const db = new sqlite3.Database("./database.db");

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // This serves your HTML file

// Create Table
db.run(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)",
);

// Handle Registration
app.post("/register", (req, res) => {
  const { name, email } = req.body;
  db.run(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err) => {
      if (err) return res.status(500).json({ message: "Database Error" });
      res.json({ message: "Registration successful!" });
    },
  );
});
// To view all registrations
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
