import Joi from "joi";
import { ErrorCustom } from "../helpers/errorCustom.js";

function createUserValidator(req, res, next) {
  const userRegisterschema = Joi.object({
    fullName: Joi.string().lowercase().trim().required().max(100),
    email: Joi.string().lowercase().trim().email().required().max(200),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    phone: Joi.string().min(8).max(20).required(),
    address: Joi.string().max(300).required(),
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = userRegisterschema.validate(req.body, options);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}
function logUserValidator(req, res, next) {
  const userLogschema = Joi.object({
    email: Joi.string().lowercase().trim().email().required().max(200),
    password: Joi.string().min(6).required(),
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = userLogschema.validate(req.body, options);

  if (error) {
    const err = new ErrorCustom(
      ` ${error.details.map((x) => x.message).join(", ")}`,
      400,
      "Bad request"
    );
    throw err;
  } else {
    req.body = value;
    next();
  }
}
export { createUserValidator,logUserValidator };
