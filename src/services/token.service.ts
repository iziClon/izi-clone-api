import jwt from 'jsonwebtoken';
import { getManager } from 'typeorm';

import { config } from '../configs';
import { IToken } from '../interfaces';
import { Token } from '../entity';

class TokenService {
    generateToken(payload:{email:string, userId:number}):{accessToken:string, refreshToken:string} {
        const accessToken = jwt.sign(payload, config.ACCESSTOKEN, { expiresIn: '30m' });
        const refreshToken = jwt.sign(payload, config.REFRESHTOKEN, { expiresIn: '30d' });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async saveToken(userId:number, accessToken:string, refreshToken:string):Promise<IToken> {
        const tokenFromDB = await getManager().getRepository(Token).findOne({ userId });

        if (tokenFromDB) {
            tokenFromDB.refreshToken = refreshToken;
            await getManager().getRepository(Token).save(tokenFromDB);
        }

        const token = await getManager().getRepository(Token)
            .save({ userId, accessToken, refreshToken });
        return token;
    }
}

export const tokenService = new TokenService();
