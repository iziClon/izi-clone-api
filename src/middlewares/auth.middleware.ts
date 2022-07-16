import { Response, Request, NextFunction } from 'express';
import { getManager } from 'typeorm';
import { authValidator } from '../validators/auth.validator';

import { User } from '../entity';

class AuthMiddleware {
    async checkIsUserExists(req:Request, res:Response, next:NextFunction) {
        try {
            const { email, phone } = req.body;

            const checkEmail = await getManager().getRepository(User).findOne({ email });
            const checkPhone = await getManager().getRepository(User).findOne({ phone });

            if (checkEmail) {
                throw new Error(`User with this email ${email} exists`);
            }

            if (checkPhone) {
                throw new Error(`User with this number ${phone} exists`);
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    async validateRegistration(req:Request, res:Response, next:NextFunction):Promise<void> {
        try {
            const { error, value } = authValidator.registration.validate(req.body);

            if (error) {
                next(new Error('Some fields are not valid'));
            }

            req.body = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
