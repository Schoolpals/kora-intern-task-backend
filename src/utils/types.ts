import { InferAttributes } from "sequelize";
import Kora from "../category/kora/model/kora-model";

export type NodeEnvironment = "development" | "test" | "production";
export type KoraQuizType = InferAttributes<Kora>;
