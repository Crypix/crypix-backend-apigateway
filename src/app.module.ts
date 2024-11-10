import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { CONFIG_MODULE_OPTIONS } from './config/ConfigModule.config';
import { AUTH_SERVICE_PROVIDER } from './microservices/AUTH_SERVICE';
import { AuthModule } from './modules/Auth/auth.module';

@Module({
	imports: [ConfigModule.forRoot(CONFIG_MODULE_OPTIONS), AuthModule],
	controllers: [],
	providers: [AppService, AUTH_SERVICE_PROVIDER],
})
export class AppModule {}
