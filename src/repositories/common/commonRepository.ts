import {
    EntityRepository, getManager, Repository,
} from 'typeorm';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { ICategory } from '../../interfaces';
import { Category } from '../../entity';

dayjs.extend(utc);

@EntityRepository(Category)
class CommonRepository extends Repository<Category> {
    public async createCategory(category: ICategory): Promise<ICategory> {
        return getManager().getRepository(Category).save(category);
    }
}

export const commonRepository = new CommonRepository();
