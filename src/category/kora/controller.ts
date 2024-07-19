import { getKoraQuizById } from './service';
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from '../../utils/success-response';
import Kora from './model/kora-model';

export const kora = async (req: Request, res: Response): Promise<void> => {
  const { quesId, quizId } = req.body;

    // Find the question in the Kora table
    const koraQuestion = await Kora.findOne({ where: { id: quesId } });

    if (!koraQuestion) {
      res.status(400).json({ message: 'Error in finding question' });
      return;
    }

    // Find the quiz in the Quiz table
    const quiz = await Quiz.findOne({ where:{id: quizId} });
    if (!quiz) {
      res.status(400).json({ message: 'Quiz not found' });
      return;
    }

    // Fetch additional question details if necessary
    const question = await getKoraQuizById(quesId);
    if (!question) {
      res.status(400).json({ message: 'Question not found' });
      return;
    }

    // Send success response
    SuccessResponse.send(res, { question });
};

export const storeKora = async(req:Request,res:Response):Promise<void>=>{
const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    res.status(400).json({ message: 'Invalid data format' });
    return;
  }

    const koraData = data.map((item: any) => ({
      id: item.id,
      question: item.question,
      options: item.options,
      answer: item.answer,
    }));
    await Kora.bulkCreate(koraData, { ignoreDuplicates: true });

    res.status(200).json({ message: 'Data inserted successfully' });
};