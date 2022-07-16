import { IProduct } from './product.interface';

export interface IUser {
    id: number;
    name: string;
    age: number;
    phone: string;
    email: string;
    password: string;
    createdAt: string;
    deletedAt?: string;
    products?: IProduct[];
}
