import express from 'express';
import { AppDataSource } from './data-sourse.js';
import { envConfig } from './config/config.js';

const app = express();
const port = envConfig.get("API_PORT");

async function main() {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });
}

main();