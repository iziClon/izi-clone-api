import { Column, Entity, OneToMany } from 'typeorm';

import { CommonFields } from './commonFields';
import { Product } from './product';
import { ICategory } from '../interfaces';

@Entity('Categories', { database: 'uwETQSYns8' })
export class Category extends CommonFields implements ICategory {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        nameCategory: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        icon: string;

    @OneToMany(() => Product, (product) => product.category)
        products: Product[];
}
