import Joi from 'joi';

export const analyzeImageSchema = Joi.object({
  image: Joi.string().required().messages({
    'any.required': 'Image data is required (base64 string or data URL)',
  }),
});

export const procedureSchema = Joi.object({
  equation: Joi.string().required(),
  balanced_equation: Joi.string().optional(),
  quantities: Joi.array()
    .items(
      Joi.object({
        formula: Joi.string().required(),
        value: Joi.number().positive().required(),
        unit: Joi.string().required(),
      })
    )
    .optional(),
  hazards: Joi.array()
    .items(
      Joi.object({
        formula: Joi.string().required(),
        severity: Joi.string().valid('red', 'amber', 'green').required(),
      })
    )
    .optional(),
  reaction_type: Joi.string().optional(),
});

export const suggestSchema = Joi.object({
  equation: Joi.string().required(),
  reaction_type: Joi.string().optional(),
});
