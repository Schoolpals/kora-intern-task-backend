import { Request, Response } from "express";
import { generateCategoryId } from "../utils/generate-category-id";
import {generateQuizId} from "../utils/generate-quiz-id"
import ErrorResponse from "../utils/error-response";
import Error404Response from "../utils/error-response";
import UserQuiz from "./model/category_model";
import SuccessResponse from "../utils/success-response";
import { findByUserId } from "../users/service/user-service";
import { findCategoryByName } from "./service";

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
    const newCategory = await UserQuiz.create({
      categoryId,
      userId,
      categoryName,
      quizId
    });
    SuccessResponse.send(res, {message:{newCategory,categoryId,quizId}});

  }

  export const getCategoryByName = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.id
    if (!userId) {return}
    const user = await findByUserId(userId)
    if (!user) {
        Error404Response.send(res,{error: "User Not Found"})
      }
    const { categoryName } = req.query;
    if (!categoryName || typeof categoryName !== 'string') {
      ErrorResponse.send(res, { message: "Category name is required and must be a string" });
      return;
    }
    const category = await findCategoryByName(categoryName);

    if (!category) {
      Error404Response.send(res, { error: "Category Not Found" });
      return;
    }
    SuccessResponse.send(res, { category });
  };