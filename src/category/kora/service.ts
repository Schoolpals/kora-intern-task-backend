import { KoraQuizType } from "../../utils/types";
import Kora from "./model/kora-model";


export const getKoraQuizById = async (id: number) => {
    const quiz = await Kora.findOne({ where: { id } });
    if (!quiz) {
      throw new Error("Quiz not found");
    }
    return quiz
   ;
  }


export const getAllQuizIds = async (): Promise<number[]> => {
  try {
    const quizzes = await Kora.findAll();
    const quizIds = quizzes.map((quiz) => quiz.id);
    return quizIds;
  } catch (error) {
    console.error("Error retrieving quiz IDs:", error);
    throw error;
  }
};

export const createKoraQuiz = async (kora: KoraQuizType) => {
  const createdQuiz = await Kora.create({ ...kora });
  return createdQuiz.dataValues;
};

//   const quizIds = getAllQuizIds();
// console.log(quizIds);
// data.forEach((question) => {
//     console.log("Question:", question.question);
//     console.log("Answer:", question.options[question.answer]);
//     console.log("----------------");
//   });

// const hmm=  getKoraQuizById(1)
// console.log(hmm)