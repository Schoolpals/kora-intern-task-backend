import { quidaxData } from "./quidax-data";

export const getQuidaxQuizById = (quesId: number)=> {
    if(!quesId){
        throw new Error("quiz not found")
    }
  return quidaxData.find((quiz) => quiz.id === quesId);

  };

  export const getAllQuizIds = (): number[] => {
    return quidaxData.map((quiz) => quiz.id);
  };
