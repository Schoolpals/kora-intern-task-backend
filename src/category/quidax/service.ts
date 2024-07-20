import QuidaxInfo from "./model";

export const getQuidaxQuizById = async (quesId: number) => {
  const quiz = await QuidaxInfo.findOne({ where: { quesId } });
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return quiz;
};


