import {DynamicModule, Module} from '@nestjs/common';
import {CONFIG_SERVICE} from './config.constants';
import {ConfigModuleOptions} from './config.types';

@Module({})
export class ConfigModule {
	static forRoot(options: ConfigModuleOptions): DynamicModule {
		return {
			global: true,
			module: ConfigModule,
			providers: [
				{
					provide: CONFIG_SERVICE,
					useValue: options,
				},
			],
			exports: [CONFIG_SERVICE],
		}
	}
}
