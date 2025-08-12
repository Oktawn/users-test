import express from 'express';
import { AppDataSource } from './data-sourse.js';
import { envConfig } from './config/config.js';
import { authRouter } from './auth/auth.router.js';
import { usersRouter } from './users/users.router.js';
import { migrate, seed } from './db/knex.js';

const app = express();
const port = envConfig.get("API_PORT");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", usersRouter);

async function main() {

  await migrate.latest();
  await seed.run();

  await AppDataSource.initialize()
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