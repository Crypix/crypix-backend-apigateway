import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CONFIG_MODULE_OPTIONS } from './config/ConfigModule.config';
import { AuthModule } from './modules/Auth/auth.module';

@Module({
	imports: [ConfigModule.forRoot(CONFIG_MODULE_OPTIONS), AuthModule],
	controllers: [],
	providers: [],
	exports: [],
})
export class AppModule {}
