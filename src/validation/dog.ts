const Joi = require('joi');

const getDogsListSchema = Joi.object({
  limit: Joi.number().optional(),
  page: Joi.number(),
  debug: Joi.boolean(),
});

const getDogByIdSchema = Joi.object({
  id: Joi.string().required(),
  debug: Joi.boolean(),
});

module.exports = {
  getDogsListSchema,
  getDogByIdSchema,
};
