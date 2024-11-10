import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TGAAuthMiddleware } from 'src/middleware/TGAAuthMiddleware';
import { AUTH_SERVICE_PROVIDER } from 'src/microservices/AUTH_SERVICE';

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
