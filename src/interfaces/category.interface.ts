import { IProduct } from './product.interface';

export interface ICategory {
    id: number;
    nameCategory: string;
    icon: string;

    products: IProduct[]
}
