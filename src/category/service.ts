import Category from "../category/model/category_model";
import UploadInfo from "../category/model/user_quiz_model";

export const findCategoryByName = async (categoryName: string) => {
  return await Category.findOne({
    where: { categoryName },
    include: [{
      model: UploadInfo,
      as: 'questions',
      attributes: ['question', 'answer', 'options'],
    }],
  });
};

export const findCategoryId = async (categoryId: string) => {
  return await Category.findOne({
    where: { categoryId },
    include: [{
      model: UploadInfo,
      as: 'questions',
      attributes: ['question', 'answer', 'options'],
    }],
  });
};
