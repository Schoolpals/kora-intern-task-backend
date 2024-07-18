import { data } from "./data";

export const getKoraQuizById = (quesId: number)=> {
    if(!quesId){
        throw new Error("quiz not found")
    }
  return data.find((quiz) => quiz.id === quesId);

  };

  export const getAllQuizIds = (): number[] => {
    return data.map((quiz) => quiz.id);
  };

//   const quizIds = getAllQuizIds();
// console.log(quizIds);
// data.forEach((question) => {
//     console.log("Question:", question.question);
//     console.log("Answer:", question.options[question.answer]);
//     console.log("----------------");
//   });