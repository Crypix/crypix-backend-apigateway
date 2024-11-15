import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TGAAuthMiddleware } from '@middleware/TGAAuthMiddleware';
import { AUTH_SERVICE_PROVIDER } from '@microservices/AUTH_SERVICE';

@Module({
	imports: [],
	controllers: [AuthController],
	providers: [AUTH_SERVICE_PROVIDER],
	exports: [AUTH_SERVICE_PROVIDER],
})
export class AuthModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(TGAAuthMiddleware).forRoutes(AuthController);
	}
}
