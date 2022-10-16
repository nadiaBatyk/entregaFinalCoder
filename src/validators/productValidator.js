import Joi from "joi";

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
    next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
  } else {
    req.body = value;
    next();
  }

}
export { createProductValidator };
