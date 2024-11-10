import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AuthController {
	constructor() {}

	@Post('/auth')
	TestService(@Body() body) {
		console.log('Hello');
		return { result: 'Hello' };
	}
}
