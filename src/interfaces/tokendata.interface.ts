import { IUser } from './user.interface';

export interface ITokendata extends IUser{
    accessToken:string;
    refreshToken:string;
}
