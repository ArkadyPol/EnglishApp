import 'dotenv/config';
import mysql from 'mysql2';
import express from 'express';
import path from 'path';

const pool = mysql
  .createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
  })
  .promise();

const app = express();
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.json());
app.post('/sentence', (req, res) => {
  console.log(req.body);
  res.end();
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
