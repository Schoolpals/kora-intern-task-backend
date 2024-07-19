import "express-async-errors";
import cors from "cors";
import { Express } from "express";

// Any other import that is from our source code should be imported here
import quizRouter from "../quiz/route/quiz-router"
import categoryRouter from "../category/route/category-router"
import authRouter from "../auth/route/auth-router"

export default function (app: Express) {
  app.use(
    cors({
      origin: process.env.CORS_ALLOWED_ORIGINS?.split(","),
      methods: "GET,POST,PUT,DELETE",
      allowedHeaders: "Content-Type",
      exposedHeaders: "x-auth-token",
      credentials: true,
    })
  );
  app.use("/quiz", quizRouter);
  app.use("/category", categoryRouter);
  app.use("/auth",authRouter)
}
