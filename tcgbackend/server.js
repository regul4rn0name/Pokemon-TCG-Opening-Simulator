const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// MySQL connection setup
const con = mysql.createConnection({
    host: "83.10.58.1",
    user: "backend",
    password: "jajca420",
    database: "cards"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

// Dynamic route for fetching data from any table

app.get('/table', (req, res) => {
  con.query("SELECT name,logo FROM sets", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
app.get('/:tableName', (req, res) => {
  const { tableName } = req.params;
  if(tableName=='undefined'){
      return res.status(400).json({error:'Invalid table name'});
  }
  const query = 'SELECT card_img, rarity, foil FROM ?? ORDER BY id ASC';
  con.query(query, [tableName], (err, result) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Database query error' });
      }
      res.json(result);
  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
