import { getManager } from 'typeorm';

import { Category } from '../entity';
import { ICategory } from '../interfaces';
import { commonRepository } from '../repositories/common/commonRepository';

class CommonService {
    public async getCategories(): Promise<ICategory[]> {
        return getManager()
            .getRepository(Category)
            .createQueryBuilder('category')
            .getMany();
    }

    public async createCategory(category: ICategory): Promise<ICategory> {
        return commonRepository.createCategory(category);
    }
}

export const commonService = new CommonService();
