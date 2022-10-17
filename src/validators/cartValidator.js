import Joi from "joi";

function createCartValidator(req, res, next) {
  const createCartSchema = Joi.object({
    products: Joi.array().min(1).required(),
    user: {
      fullName: Joi.string().lowercase().trim().required().max(100),
      email: Joi.string().lowercase().trim().email().required().max(200),
      phone: Joi.string().min(8).max(20).required(),
      address: Joi.string().max(300).required(),
    },
  });

  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  const { error, value } = createCartSchema.validate(req.body, options);

  if (error) {
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }
}
export { createCartValidator };
