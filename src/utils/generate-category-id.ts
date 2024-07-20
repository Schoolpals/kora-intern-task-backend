import { v4 as uuidv4 } from "uuid";

export function generateCategoryId(): string {
    return uuidv4();
  }
  