import { Request, Response } from "express";
import UserQuiz from "./model/category_model";
import SuccessResponse from "../utils/success-response";
import { generateCategoryId } from "../utils/generate-category-id";
import {generateQuizId} from "../utils/generate-quiz-id"
import ErrorResponse from "../utils/error-response";
import { findByUserId } from "../users/service/user-service";
import Error404Response from "../utils/error-response";

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.id
    if (!userId) {return}
    const user = await findByUserId(userId)
    if (!user) {
        Error404Response.send(res,{error: "User Not Found"})
      }
    const { categoryName} = req.body;
    if (!categoryName) {
    ErrorResponse.send(res,{ message: "Category name is required" });
    return;
      }
    const categoryId = generateCategoryId()
    const quizId = generateQuizId()
    console.log('Creating category with data:', {
      categoryId,
      userId,
      categoryName,
      quizId
  });
    const newCategory = await UserQuiz.create({
      categoryId,
      userId,
      categoryName,
      quizId
    });
    SuccessResponse.send(res, {message:{newCategory,categoryId,quizId}});
};
