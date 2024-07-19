

// import { koraData } from "../../utils/types";
import { data } from "./data";
import KoraInfo from "./model/kora-info-model";



export const getKoraQuizById = async (quesId: number) => {
  const quiz = await KoraInfo.findOne({ where: { quesId } });
  if (!quiz) {
    throw new Error("Quiz not found");
  }
  return quiz;
};

export const getAllQuizIds = async (): Promise<number[]> => {
  try {
    const quizzes = await KoraInfo.findAll();
    const quizIds = quizzes.map((quiz) => quiz.quesId);
    return quizIds;
  } catch (error) {
    console.error("Error retrieving quiz IDs:", error);
    throw error;
  }
};



// export const createKoraQuiz = async (kora: koraData) => {
//   const createdQuiz = await Kora.create({ ...kora });
//   return createdQuiz.dataValues;
// };

// async function initializeApp() {
//   try {
//     await Kora.sync();
//     await Kora.bulkCreate(data.data);
//     console.log('Data inserted successfully');
//   } catch (error) {
//     console.error('Error inserting data:', error);
//   }
// }
// initializeApp();
//   const quizIds = getAllQuizIds();
// console.log(quizIds);
// data.forEach((question) => {
//     console.log("Question:", question.question);
//     console.log("Answer:", question.options[question.answer]);
//     console.log("----------------");
//   });

// const hmm=  getKoraQuizById(1)
// console.log(hmm)