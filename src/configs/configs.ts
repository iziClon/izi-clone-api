import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT,
    ACCESSTOKEN: process.env.ACCESSTOKEN || 'accessToken',
    REFRESHTOKEN: process.env.REFRESHTOKEN || 'refreshToken',

    DB_NAME: process.env.DB_NAME,
};
