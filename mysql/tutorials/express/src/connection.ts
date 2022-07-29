import { Application } from 'express';
import mysql from 'mysql2';

// Create MySQL Connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 5001,
  user: 'root',
  password: 'password',
  database: 'service',
});

// MySQL Connect Function
export const connect = (app: Application, port: number) => {
  const query = `SHOW TABLES;`;
  connection
    .promise()
    .query(query)
    .then(() => {
      const log = () => console.log(`Server Running on port ${port}`);
      app.listen(port, log);
    })
    .catch(() => console.log('MySQL Connection Error!'));
};
