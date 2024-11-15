import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';

import { getInitData } from '@utils/getInitData';

import type { UserAuthBody } from '@interfaces/AuthBody';

@Controller()
export class AuthController {
	constructor(@Inject('AUTH_SERVICE') private readonly AuthService: ClientProxy) {}

	@Post('/auth')
	public async Auth(@Body() body: UserAuthBody, @Res({ passthrough: true }) response: Response) {
		const pattern = { cmd: 'AuthOrRegister' };
		const payload = { user: getInitData(response).user, wallet: body.wallet };
		return await lastValueFrom(this.AuthService.send(pattern, payload));
	}
}
