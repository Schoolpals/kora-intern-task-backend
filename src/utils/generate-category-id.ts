import { v4 as uuidv4 } from "uuid";

export const generateCategoryId=(): string=>{
    return uuidv4();
  }
  