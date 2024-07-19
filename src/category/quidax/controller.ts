import { Request, Response } from "express";
import Quiz from "../../quiz/model/quiz-model";
import SuccessResponse from "../../utils/success-response";
import { getQuidaxQuizById } from "./service";

export const quidax = async(req:Request,res:Response):Promise<void> => {
     const {quesId,quizId}=req.body
     const quiz = await Quiz.findOne({where:{quizId}})
     if(quiz){
       const question= getQuidaxQuizById(quesId)
       SuccessResponse.send(res,question)
    }
}