export interface IProduct {
    id:number;
    categoryId:number;
    userId:number;
    title: string;
    description: string;
    price: number;
    year?: number;
    status: boolean;
}
