import { Request, Response } from 'express';

import { ICategory } from '../interfaces';

import { commonService } from '../services';

class CommonController {
    public async getCategories(req: Request, res: Response): Promise<Response<ICategory[]>> {
        const categories = await commonService.getCategories();
        return res.json(categories);
    }

    public async createCategory(req: Request, res: Response): Promise<Response<ICategory>> {
        const createdCategory = await commonService.createCategory(req.body);
        return res.json(createdCategory);
    }
}

export const commonController = new CommonController();
