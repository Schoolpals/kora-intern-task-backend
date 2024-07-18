import Joi from "joi";

const quizSchema = Joi.object({
    username: Joi.string().trim().required(),
});

export const validateUsername = (user: any) => {
    return quizSchema.validate(user);
}

