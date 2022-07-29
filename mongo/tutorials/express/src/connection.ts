import { Application } from 'express';
import mongoose from 'mongoose';

// Mongoose URI Protocol Types
type Protocol = 'mongodb' | 'mongodb+srv';

// Mongoose Configurations Interface
interface Configs {
  protocol: Protocol;
  user: {
    username: string;
    password: string;
  };
  connection: {
    host: string;
    port: number;
    adminPath: string;
  };
}

// Mongoose Configurations
const configs: Configs = {
  protocol: `mongodb`,
  user: {
    username: 'root',
    password: 'password',
  },
  connection: {
    host: '127.0.0.1',
    port: 5002,
    adminPath: 'admin',
  },
};

// Create Mongoose URI with Configurations
const createMongoURI = () => {
  const {
    protocol,
    user: { username, password },
    connection: { host, port, adminPath },
  } = configs;
  const user = `${username}:${password}`;
  const connection = `${host}:${port}/${adminPath}`;
  return `${protocol}://${user}@${connection}`;
};

// Mongoose Connect Function
export const connect = (app: Application, port: number) => {
  const mongoUri = createMongoURI();
  mongoose
    .connect(mongoUri)
    .then(() => {
      const log = () => console.log(`Server Running on port ${port}`);
      app.listen(port, log);
    })
    .catch(() => console.log('MongoDB Connection Error!'));
};
