import UploadInfo from "../../category/model/user_quiz_model";

export const getUserQuizById = async (quesId: any) => {
    const quiz = await UploadInfo.findOne({ where: { quesId } });
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    return quiz;
  };