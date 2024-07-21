import { Request, Response } from "express";
import SuccessResponse from "../utils/success-response";
import { generateCategoryId } from "../utils/generate-category-id";
import ErrorResponse from "../utils/error-response";
import Error404Response from "../utils/error-response";
import { generateQuizId } from "../utils/generate-quiz-id";
import UserQuiz from "./model/category_model";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.id;
  const categoryId = generateCategoryId();
  const quizId = generateQuizId();
  if (!userId) {
    Error404Response.send(res, { error: "User Not Found" });
    return;
  }
  const { categoryName } = req.body;
  if (!categoryName) {
    ErrorResponse.send(res, { message: "Category name is required" });
    return;
  }
  const newCategory = await UserQuiz.create({
    categoryName,
    categoryId,
    quizId,
    userId
  });

  SuccessResponse.send(res,newCategory );
};
