import Joi from "joi";

const signInByMailSchema = Joi.object({
  username: Joi.string().min(7).required(),
  password: Joi.string().required(),
});

export function validateLoginInfo(data: any) {
  return signInByMailSchema.validate(data);
}
