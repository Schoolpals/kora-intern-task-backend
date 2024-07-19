
import dotenv from "dotenv";
import { NodeEnvironment } from "../utils/types";
import { Sequelize } from "sequelize-typescript";
import { setting } from "../config/db";
import User from "../users/user-model";
import Quiz from "../quiz/model/quiz-model";
import Token from "../token/model/token-model";
import Kora from "../category/kora/model/kora-model";

dotenv.config();

const env = (process.env.NODE_ENV as NodeEnvironment) || "production";
const config = setting[env];

/**
 * Models would be loaded manually. This is because of the modelMatch option in the sequelize constructor
 * @see [Sequelize-Typescript](https://www.npmjs.com/package/sequelize-typescript#model-path-resolving)
 */

const connString = `${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}?ssl=true`;

const sequelize = new Sequelize(connString, {
  models: [
    User,
    Quiz,
    Token,
    Kora
  ],
});

export default sequelize;
