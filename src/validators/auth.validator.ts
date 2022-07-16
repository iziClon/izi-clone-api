import Joi from 'joi';

import { regex } from '../constans';

export const authValidator = {
    registration: Joi.object({
        name: Joi.string().min(2).max(30).required(),
        age: Joi.number().min(18).required(),
        phone: Joi.string().min(8).required(),
        email: Joi.string().regex(regex.Email).required(),
        password: Joi.string().min(8).required(),
    }),
};
