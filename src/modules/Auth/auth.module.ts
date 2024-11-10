import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TGAAuthMiddleware } from 'src/middleware/TGAAuthMiddleware';

@Module({
	imports: [],
	controllers: [AuthController],
	providers: [],
})
export class AuthModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(TGAAuthMiddleware).forRoutes(AuthController);
	}
}
