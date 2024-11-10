import { ConfigModuleOptions } from '@nestjs/config';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';
const CONFIG_MODULE_OPTIONS: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath:
    isProduction === false ? '../crypix-infrastructure/.main.env' : null,
};
export { CONFIG_MODULE_OPTIONS };
