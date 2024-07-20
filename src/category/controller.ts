import { Request, Response } from "express";
import Category from "../category/model/category_model";
import SuccessResponse from "../utils/success-response";
import { generateCategoryId } from "../utils/generate-category-id";
import ErrorResponse from "../utils/error-response";
import { findByUserId } from "../users/service/user-service";
import Error404Response from "../utils/error-response";

export const createCategory = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.id
    if (!userId) {return}
    const userExist = findByUserId(userId)
    if (!userExist) {
        Error404Response.send(res,{error: "User Not Found"})
      }
  const { categoryName } = req.body;
  if (!categoryName) {
    ErrorResponse.send(res,{ message: "Category name is required" });
    return;
  }
    const newCategory = await Category.create({categoryName});
    const categoryId = await generateCategoryId
    SuccessResponse.send(res, {message:{newCategory, categoryId}});
};
