import { Request, Response } from 'express';

import { authService } from '../services';

class AuthController {
    public async registration(req: Request, res: Response) {
        const newUser = await authService.registration(req.body);
        res.cookie('refreshToken', newUser.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return res.json(newUser);
    }

    public async login(req: Request, res: Response) {
        console.log('login');
    }

    public async logout(req: Request, res: Response) {
        console.log('logout');
    }
}

export const authController = new AuthController();
