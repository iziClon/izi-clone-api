import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { CommonFields } from './commonFields';
import { Category } from './category';
import { User } from './user';
import { IProduct } from '../interfaces';

@Entity('Products', { database: 'uwETQSYns8' })
export class Product extends CommonFields implements IProduct {
    @Column({
        type: 'int',
        nullable: false,
    })
        categoryId: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        userId: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        description: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        price: number;

    @Column({
        type: 'int',
    })
        year?: number;

    @Column({
        type: 'boolean',
        nullable: false,

    })
        status: boolean;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'categoryId' })
        category: Category;

    @ManyToOne(() => User, (user) => user.products)
    @JoinColumn({ name: 'userId' })
        user: User;
}
