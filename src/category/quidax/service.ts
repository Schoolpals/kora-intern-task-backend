import QuidaxInfo from "./model";

export const getQuidaxQuizById = async (quesId: number) => {
  const quiz = await QuidaxInfo.findOne({ where: { quesId } });
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return quiz;
};

export const getAllQuizIds = async (): Promise<number[]> => {
  try {
    const quizzes = await QuidaxInfo.findAll();
    const quizIds = quizzes.map((quiz) => quiz.quesId);
    return quizIds;
  } catch (error) {
    console.error("Error retrieving quiz IDs:", error);
    throw error;
  }
};
