import dotenv from 'dotenv';

dotenv.config();

export const config = {
    PORT: process.env.PORT || 5100,
    ACCESSTOKEN: process.env.ACCESSTOKEN || 'accessToken',
    REFRESHTOKEN: process.env.REFRESHTOKEN || 'refreshToken',
};
