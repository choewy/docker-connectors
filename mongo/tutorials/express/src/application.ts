import express from 'express';

// Create Express Application Function
const createApplication = () => {
  const app = express();
  return app;
};

export const port = 5000;
export const app = createApplication();
