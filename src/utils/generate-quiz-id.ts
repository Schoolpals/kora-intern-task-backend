import { v4 as uuidv4 } from "uuid";

export function generateQuizId(): string {
    return uuidv4();
  }
  