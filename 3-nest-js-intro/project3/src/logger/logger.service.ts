import {Injectable} from '@nestjs/common';
import {ConfigModuleOptions} from '../config/config.types';
import {LoggerModuleOptions} from './logger.types';

@Injectable()
export class LoggerService {
	constructor(
		private readonly options: LoggerModuleOptions,
		private readonly config: ConfigModuleOptions,
	) {}

	print(message: string) {
		if (this.config.debug) {
			console.log(`[${this.options.level.toUpperCase()}] ${message}`)
		}
	}
}
