import { v4 as uuidv4 } from "uuid";

export const generateQuizId= () :string => {
    return uuidv4();
  }
  