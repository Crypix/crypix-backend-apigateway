import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import { validate, parse as tgaParse } from '@telegram-apps/init-data-node';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { setInitData } from 'src/utils/setInitData';

@Injectable()
class TGAAuthMiddleware implements NestMiddleware {
	constructor(private ConfigService: ConfigService) {}
	public use(req: Request, res: Response, next: NextFunction) {
		const tga_token = this.ConfigService.get('TGA_CRYPIX_TOKEN');
		const expiresIn = this.ConfigService.get('TGA_CRYPIX_SESSION_EXPIRES');

		const [authType, authData = ''] = (req.headers['authorization'] ?? '').split(' ');

		if (authType === 'tma') {
			try {
				validate(authData, tga_token, { expiresIn: expiresIn });
				setInitData(res, tgaParse(authData));
				return next();
			} catch (e) {
				return next(new UnauthorizedException());
			}
		}
		return next(new UnauthorizedException());
	}
}

export { TGAAuthMiddleware };
