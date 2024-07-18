import { getKoraQuizById } from './service';

import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from '../../utils/success-response';

export const kora=async(req:Request,res:Response):Promise<void>=>{
const {quesId,quizId}=req.body
const quiz = await Quiz.findOne({where:{quizId}})
if(quiz){
   const question= getKoraQuizById(quesId)
   SuccessResponse.send(res,question)
}
}