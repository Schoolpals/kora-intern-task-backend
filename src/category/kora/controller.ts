import { getKoraQuizById } from './service';
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from '../../utils/success-response';
import Kora from './model/kora-model';

// export const kora = async(req:Request,res:Response):Promise<void>=>{
// const {quesId,quizId}=req.body
// const koraId=await Kora.findOne({where:{quesId}})
// if(!koraId){
//    res.status(400).json({message:"Error in finding quiz"})
// }
// const quiz = await Quiz.findOne({where:{quizId}})
// if(quiz){
//    const question = await getKoraQuizById(quesId)
//    SuccessResponse.send(res,{question})
//    return
// }
// }

export const kora = async (req: Request, res: Response): Promise<void> => {
  const { quesId, quizId } = req.body;

  try {
    const koraQuiz = await Kora.findOne({ where: { id: quesId } });

    if (!koraQuiz) {
      res.status(400).json({ message: 'Error in finding quiz' });
      return;
    }

    const quiz = await Quiz.findOne({ where: { id: quizId } });

    if (!quiz) {
      res.status(400).json({ message: 'Quiz not found' });
      return;
    }

    const question = await getKoraQuizById(quesId);
    if (!question) {
      res.status(400).json({ message: 'Question not found' });
      return;
    }

    const response = {
      question:question.question,
      options: question.options,
      answer: question.answer
    };

    SuccessResponse.send(res, response);
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};