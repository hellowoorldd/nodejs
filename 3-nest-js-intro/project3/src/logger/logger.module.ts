import {DynamicModule, Module} from '@nestjs/common';
import {CONFIG_SERVICE} from '../config/config.constants';
import {LoggerService} from './logger.service';
import {LoggerModuleOptions} from './logger.types';

@Module({})
export class LoggerModule {
	static forRoot(options: LoggerModuleOptions): DynamicModule {
		return {
			global: true,
			module: LoggerModule,
			providers: [
				{
					provide: LoggerService,
					useFactory: (configService) => {
						return new LoggerService(options, configService)
					},
					inject: [CONFIG_SERVICE]
				}
			],
			exports: [LoggerService],
		}
	}
}
