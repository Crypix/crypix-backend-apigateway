import { InitData } from '@telegram-apps/init-data-node';
import { type Response } from 'express';

function getInitData(res: Response): InitData | undefined {
	return res.locals.tgaInitData;
}

export { getInitData };
