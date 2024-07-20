import { Request, Response } from "express";
import Category from "../category/model/category_model";
import SuccessResponse from "../utils/success-response";
import { generateCategoryId } from "../utils/generate-category-id";
import ErrorResponse from "../utils/error-response";
import { findByUserId } from "../users/service/user-service";
import Error404Response from "../utils/error-response";
import { generateQuizId } from "../utils/generate-quiz-id";

export const createCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.user?.id;
  const categoryId = generateCategoryId();
  const quizId = generateQuizId();
  if (!userId) {
    return;
  }
  const userExist = findByUserId(userId);
  if (!userExist) {
    Error404Response.send(res, { error: "User Not Found" });
  }
  const { categoryName } = req.body;
  if (!categoryName) {
    ErrorResponse.send(res, { message: "Category name is required" });
    return;
  }
  const newCategory = await Category.create({
    categoryName,
    categoryId,
    quizId,
  });

  SuccessResponse.send(res, { message: { newCategory } });
};
