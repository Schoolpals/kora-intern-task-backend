import UploadInfo from "../../category/model/user_quiz_model";

export const getUserQuizById = async (quesId: string) => {
    const quiz = await UploadInfo.findOne({ where: { id: quesId } });
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    return quiz;
  };