import { createKoraQuiz } from './../category/kora/service';
import { validateUsername } from './validator/quiz-validator';
import { Request, Response } from "express";
import { generateQuizId } from '../utils/generate-quiz-id';
import Quiz from './model/quiz-model';
import SuccessResponse from '../utils/success-response';

export const startQuiz=async(req:Request,res:Response):Promise<void>=>{
    const validation = validateUsername(req.body);
    if (validation.error) {
      res.status(400).json({ error: validation.error.details[0].message });
      return;
    }
    const{username}=validation.value
const quizId=generateQuizId()
const quiz= await Quiz.create({
    quizId
})
SuccessResponse.send(res,quiz,username)
}


export const upload=async(req:Request,res:Response):Promise<void>=>{
  const{quesId,options,answer,question}=req.body

const createdQuiz= await createKoraQuiz({
  quesId,options,answer,question
})
SuccessResponse.send(res,createdQuiz)
}
