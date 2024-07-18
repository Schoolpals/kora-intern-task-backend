
import { Request, Response } from "express";
import Quiz from "../../quiz/quiz-model";



export const kora=async(req:Request,res:Response):Promise<void>=>{
const{quizId}= req.query
const quiz = await Quiz.findOne({where:{quizId}})
if(quiz){
}
}