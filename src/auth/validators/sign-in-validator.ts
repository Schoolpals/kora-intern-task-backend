import Joi from "joi";

const signInByMailSchema = Joi.object({
  userName: Joi.string().trim().required(),
  password: Joi.string().min(6).required(),
});

export function validateLoginInfo(data: any) {
  return signInByMailSchema.validate(data);
}
