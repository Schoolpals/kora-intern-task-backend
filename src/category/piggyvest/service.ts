import PiggyInfo from "./model/piggyvest-model";


export const getPiggyQuizById = async (quesId: number) => {
  const quiz = await PiggyInfo.findOne({ where: { quesId } });
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return quiz;
};

export const getAllQuizIds = async (): Promise<number[]> => {
  try {
    const quizzes = await PiggyInfo.findAll();
    const quizIds = quizzes.map((quiz) => quiz.quesId);
    return quizIds;
  } catch (error) {
    console.error("Error retrieving quiz IDs:", error);
    throw error;
  }
};
