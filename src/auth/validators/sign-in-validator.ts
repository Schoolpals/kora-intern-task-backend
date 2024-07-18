import Joi from "joi";

const signInByMailSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export function validateMailInfo(data: any) {
  return signInByMailSchema.validate(data);
}
