import { InitData } from '@telegram-apps/init-data-node';
import { type Response } from 'express';

function setInitData(res: Response, initData: InitData): void {
	res.locals.tgaInitData = initData;
}

export { setInitData };
