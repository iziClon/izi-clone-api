import { getManager } from 'typeorm';
import bcrypt from 'bcrypt';

import { ITokendata, IUser } from '../interfaces';
import { User } from '../entity';
import { tokenService } from './token.service';

class AuthService {
    async registration(user:IUser):Promise<ITokendata> {
        const { email, password } = user;

        const hashPassword = await bcrypt.hash(password, 5);
        const userHashed = { ...user, password: hashPassword };

        const newUser = await getManager().getRepository(User).save(userHashed);

        const tokens = tokenService.generateToken({ email, userId: newUser.id });
        await tokenService.saveToken(newUser.id, tokens.accessToken, tokens.refreshToken);

        return {
            ...tokens,
            ...newUser,
        };
    }
}

export const authService = new AuthService();
