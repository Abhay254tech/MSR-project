// src/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql12.freemysqlhosting.net',
  user: 'sql12758306',
  password: 'HNwI21jrvS',
  database: 'sql12758306',
  port: 3306
});

export default pool;
