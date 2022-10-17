import Joi from "joi";
import { ErrorCustom } from "../helpers/errorCustom.js";

function createOrderValidator(req, res, next) {
  const createOrderSchema = Joi.object({
    cart:{
        products: Joi.array().min(1).required(),
        user: {
          fullName: Joi.string().lowercase().trim().required().max(100),
          email: Joi.string().lowercase().trim().email().required().max(200),
          phone: Joi.string().min(8).max(20).required(),
          address: Joi.string().max(300).required(),
        }
    },
    
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = createOrderSchema.validate(req.body, options);

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
export { createOrderValidator };
