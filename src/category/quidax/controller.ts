import { getQuidaxQuizById } from "./service";
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from "../../utils/success-response";
import QuidaxInfo from "./model";

export const quidax = async (req: Request, res: Response): Promise<void> => {
  const { quesId, quizId } = req.query;
  const parsedQuesId=parseInt(quesId as string, 10)
  const quiz = await Quiz.findOne({ where: { quizId } });

  if (!quiz) {
    res.status(400).json({ message: "Quiz not found" });
    return;
  }
  const quidaxQuiz = await QuidaxInfo.findOne({ where: { quesId: parsedQuesId } });

  if (!quidaxQuiz) {
    res.status(400).json({ message: "Error in finding quiz" });
    return;
  }
  const question = await getQuidaxQuizById(parseInt(quesId as string, 10))
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

export const storeQuidax = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    res.status(400).json({ message: "Invalid data format" });
    return;
  }
  const QuidaxData = data.map((item: any) => ({
    quesId: item.quesId,
    question: item.question,
    options: item.options,
    answer: item.answer,
  }));
  await QuidaxInfo.bulkCreate(QuidaxData, { ignoreDuplicates: true });

  res.status(200).json({ message: "Data inserted successfully" });
};