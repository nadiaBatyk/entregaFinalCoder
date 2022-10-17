import Joi from "joi";
import { ErrorCustom } from "../helpers/errorCustom.js";

function createProductValidator(req, res, next) {
  const createProductSchema = Joi.object({
    name: Joi.string().lowercase().trim().required().max(100),
    description: Joi.string().lowercase().trim().required().max(300),
    category: Joi.string().lowercase().trim().required().max(100),
    url: Joi.string().required(),
    price: Joi.number().min(0).required(),
    quantity: Joi.number().min(0).required(),
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = createProductSchema.validate(req.body, options);

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
export { createProductValidator };
