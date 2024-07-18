import express from "express";
import routes from "./src/startup/routes";
import sequelize from "./src/startup/db";
import configChecks from "./src/startup/config-checks";
import dotenv from "dotenv";
import cors from "cors";

// Rest of your Express app configuration
dotenv.config();
const app = express();
const port = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configChecks();

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);

    process.exit(1);
  });

sequelize.sync()
routes(app);

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} and environment is set to ${process.env.NODE_ENV}`
  );
});
