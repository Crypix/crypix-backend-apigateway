import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { getInitData } from 'src/utils/getInitData';

@Controller()
export class AuthController {
	constructor(@Inject('AUTH_SERVICE') private readonly AuthService: ClientProxy) {}

	@Post('/auth')
	public async Auth(@Body() body, @Res({ passthrough: true }) response: Response) {
		const pattern = { cmd: 'AuthOrRegister' };
		const payload = getInitData(response).user;
		const result = await lastValueFrom(this.AuthService.send(pattern, payload));

		console.log(result);
		return result;
	}
}
