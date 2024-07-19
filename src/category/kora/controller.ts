import { getKoraQuizById } from './service';
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from '../../utils/success-response';
import Kora from './model/kora-model';

export const kora = async (req: Request, res: Response): Promise<void> => {
  const { quesId} = req.body;
   // Fetch the quiz by quiz ID
  //  const quiz = await Quiz.findOne({ where: { quizId } });

  //  if (!quiz) {
  //    res.status(400).json({ message: 'Quiz not found' });
  //    return;
  //  }

    // Fetch the kora quiz by question ID
    const koraQuiz = await Kora.findOne({ where: { quesId } });

    if (!koraQuiz) {
      res.status(400).json({ message: 'Error in finding quiz' });
      return;
    }

    // Fetch the question details
    const question = await getKoraQuizById(quesId);
    if (!question) {
      res.status(400).json({ message: 'Question not found' });
      return;
    }
    // Prepare the response data
    const response = {
      question: question.question,
      options: question.options,
      answer: question.answer
    };
    // Send the success response
    SuccessResponse.send(res, response);
  } 

  export const storeKora = async(req:Request,res:Response):Promise<void>=>{
    const { data } = req.body;
      if (!data || !Array.isArray(data)) {
        res.status(400).json({ message: 'Invalid data format' });
        return;
      }
        const koraData = data.map((item: any) => ({
          quesId: item.quesId,
          question: item.question,
          options: item.options,
          answer: item.answer,
        }));
        await Kora.bulkCreate(koraData, { ignoreDuplicates: true });
    
        res.status(200).json({ message: 'Data inserted successfully' });
    };
