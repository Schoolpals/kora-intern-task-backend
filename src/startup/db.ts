import dotenv from "dotenv";
import { NodeEnvironment } from "../utils/types";
import { Sequelize } from "sequelize-typescript";
import { setting } from "../config/db";
import User from "../users/user-model";
import Token from "../token/model/token-model";
import KoraInfo from "../category/kora/model/kora-info-model";
import PiggyInfo from "../category/piggyvest/model/piggyvest-model";
import QuizInfo from "../quiz/model/quiz-info-model";
import UserQuiz from "../category/model/category_model";
import QuidaxInfo from "../category/quidax/model";
import UploadInfo from "../category/model/user_quiz_model"


dotenv.config();

const env = (process.env.NODE_ENV as NodeEnvironment) || "development";
const config = setting[env];

/**
 * Models would be loaded manually. This is because of the modelMatch option in the sequelize constructor
 * @see [Sequelize-Typescript](https://www.npmjs.com/package/sequelize-typescript#model-path-resolving)
 */

const connString = `${config.dialect}://${config.username}:${config.password}@${config.host}/${config.database}`;

const sequelize = new Sequelize(connString, {
  models: [
    User,
    QuizInfo,
    Token,
    KoraInfo,
    PiggyInfo,
    QuidaxInfo,
    UserQuiz,
    UploadInfo,
  ],
});

export default sequelize;
