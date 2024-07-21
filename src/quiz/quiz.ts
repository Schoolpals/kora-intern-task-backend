import { validateUpload } from "./validator/upload-quiz-validator";
import { ErrorResponse } from "./../utils/error-response";
import { validateUsername } from "./validator/quiz-validator";
import { Request, Response } from "express";
import { generateQuizId } from "../utils/generate-quiz-id";
import SuccessResponse from "../utils/success-response";
import QuizInfo from "./model/quiz-info-model";
import { generateQuesId } from "../utils/generate-ques-id";
// import UploadInfo from "../category/model/user_quiz_model";
import UserQuiz from "../category/model/category_model";
// import { getUserQuizById } from "./service/quiz-service";

export const startQuiz = async (req: Request, res: Response): Promise<void> => {
  const validation = validateUsername(req.body);
  if (validation.error) {
    res.status(400).json({ error: validation.error.details[0].message });
    return;
  }
  const { username } = validation.value;
  const quizId = generateQuizId();

  await QuizInfo.create({
    quizId,
    score: 0,
  });
  SuccessResponse.send(res, quizId, username);
};

export const displayScore = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { quizId } = req.query;
  const { score } = req.body;
  const quiz = await QuizInfo.findOne({ where: { quizId } });
  if (quiz) {
    const userScore = await QuizInfo.update({ score }, { where: { quizId } });
    SuccessResponse.send(res, userScore);
    return;
  }
  res.status(400).json({ message: "User not found" });
};

// export const userUpload = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { categoryId } = req.query;
//   const validation = validateUpload(req.body);
//   const quesId = generateQuesId();

//   if (validation.error) {
//     res.status(400).json({ error: validation.error.details[0].message });
//     return;
//   }

//   const { question, answer, options } = validation.value;

//   const userId = req.user?.id;

//   const category = await UserQuiz.findOne({ where: { categoryId } });

//   if (!category) {
//     ErrorResponse.send(res, { message: "Category not found" });
//     return;
//   }

//   if (userId) {
//     const newUploadInfo = await UploadInfo.create({
//       userId,
//       categoryId,
//       quesId,
//       question,
//       answer,
//       options,
//     });
//     res.status(200).json({
//       message: "Quiz uploaded successfully",
//       uploadInfo: newUploadInfo,
//     });
//     return;
//   }
//   ErrorResponse.send(res, { message: "Unable to Upload quiz" });
// };

// export const displayUserQuiz = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { quesId, quizId } = req.query;

//   const userId = req.user?.id;

//   const quiz = await UserQuiz.findOne({ where: { quizId } });

//   if (!userId) {
//     ErrorResponse.send(res, { message: "User not found" });
//     return;
//   }

//   if (!quiz) {
//     res.status(400).json({ message: "Quiz not found" });
//     return;
//   }

//   const userQuiz = await UploadInfo.findOne({ where: { quesId } });

//   if (!userQuiz) {
//     res.status(400).json({ message: "Error in finding quiz" });
//     return;
//   }

//   const question = await getUserQuizById(quesId);
//   if (!question) {
//     res.status(400).json({ message: "Question not found" });
//     return;
//   }

//   const response = {
//     question: question.question,
//     options: question.options,
//     answer: question.answer,
//   };
//   SuccessResponse.send(res, response);
// };
