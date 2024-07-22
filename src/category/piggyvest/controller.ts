
import { Request, Response } from "express";
import QuizInfo from "../../quiz/model/quiz-info-model";
import SuccessResponse from "../../utils/success-response";
import PiggyInfo from "./model/piggyvest-model";
import { getPiggyQuizById } from "./service";

export const piggy = async (req: Request, res: Response): Promise<void> => {
  const { quesId, quizId } = req.query;
  const parsedQuesId=parseInt(quesId as string, 10)
  
  const quiz = await QuizInfo.findOne({ where: { quizId } });
  if (!quiz) {
    res.status(400).json({ message: "Quiz not found" });
    return;
  }

  const piggyQuiz = await PiggyInfo.findOne({ where: {  quesId: parsedQuesId } });
  if (!piggyQuiz) {
    res.status(400).json({ message: "Error in finding quiz" });
    return;
  }

  const question = await getPiggyQuizById(parseInt(quesId as string, 10));
  if (!question) {
    res.status(400).json({ message: "Question not found" });
    return;
  }

  const response = {
    question: question.question,
    options: question.options,
    answer: question.answer,
  };
  SuccessResponse.send(res, response);
};

export const storePiggy = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    res.status(400).json({ message: "Invalid data format" });
    return;
  }
  const piggyData = data.map((item: any) => ({
    quesId: item.quesId,
    question: item.question,
    options: item.options,
    answer: item.answer,
  }));
  await PiggyInfo.bulkCreate(piggyData, { ignoreDuplicates: true });

  res.status(200).json({ message: "Data inserted successfully" });
};
