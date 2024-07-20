// import { createKoraQuiz } from './../category/kora/service';
import { validateUsername } from "./validator/quiz-validator";
import { Request, Response } from "express";
import { generateQuizId } from "../utils/generate-quiz-id";

import SuccessResponse from "../utils/success-response";
import QuizInfo from "./model/quiz-info-model";

export const startQuiz = async (req: Request, res: Response): Promise<void> => {
  const validation = validateUsername(req.body);
  if (validation.error) {
    res.status(400).json({ error: validation.error.details[0].message });
    return;
  }
  const { username } = validation.value;
  const quizId = generateQuizId();
 await QuizInfo.create({
    quizId,
  });
  SuccessResponse.send(res, quizId, username);
};

export const displayScore = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { quizId } = req.query;
  const { score } = req.body;
  const quiz = await QuizInfo.findOne({ where: { quizId } });
  if (quiz) {
    const userScore = await QuizInfo.create({ score });
    SuccessResponse.send(res, userScore);
    return;
  }
  res.status(400).json({ message: "User not found" });
};
