import { getKoraQuizById } from "./service";
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from "../../utils/success-response";
import KoraInfo from "./model/kora-info-model";

export const kora = async (req: Request, res: Response): Promise<void> => {
  const { quesId, quizId } = req.query;
  const parsedQuesId=parseInt(quesId as string, 10)
  const quiz = await Quiz.findOne({ where: { quizId } });

  if (!quiz) {
    res.status(400).json({ message: "Quiz not found" });
    return;
  }
  const koraQuiz = await KoraInfo.findOne({ where: { parsedQuesId } });

  if (!koraQuiz) {
    res.status(400).json({ message: "Error in finding quiz" });
    return;
  }

  const question = await getKoraQuizById(parsedQuesId);
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

export const storeKora = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;
  if (!data || !Array.isArray(data)) {
    res.status(400).json({ message: "Invalid data format" });
    return;
  }
  const koraData = data.map((item: any) => ({
    quesId: item.quesId,
    question: item.question,
    options: item.options,
    answer: item.answer,
  }));
  await KoraInfo.bulkCreate(koraData, { ignoreDuplicates: true });

  res.status(200).json({ message: "Data inserted successfully" });
};