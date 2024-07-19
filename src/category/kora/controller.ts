import { getKoraQuizById } from './service';
import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from '../../utils/success-response';
import Kora from './model/kora-model';

export const kora = async(req:Request,res:Response):Promise<void>=>{
const {quesId,quizId}=req.body
const koraId=await Kora.findOne({where:{quesId}})
if(!koraId){
   res.status(400).json({message:"Error in finding quiz"})
}
const quiz = await Quiz.findOne({where:{quizId}})
if(quiz){
   const question = await getKoraQuizById(quesId)
   SuccessResponse.send(res,{question})
   return
}
}