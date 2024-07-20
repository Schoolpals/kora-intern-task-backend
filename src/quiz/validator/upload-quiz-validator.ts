import Joi from "joi";

const uploadSchema = Joi.object({
  question: Joi.string().required(),
  answer: Joi.number().integer().min(0).required(),
  options: Joi.array().items(Joi.string()).required()
});

export const validateUpload = (upload: any) => {
  return uploadSchema.validate(upload);
};