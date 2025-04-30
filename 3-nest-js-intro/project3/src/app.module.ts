import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {LoggerModule} from './logger/logger.module';
import {LogLevelEnum} from './logger/logger.types';
import {UsersModule} from './users/users.module';
import {ConfigModule} from './config/config.module';


// https://docs.nestjs.com/modules
@Module({
  // list of modules which providers to be available in this module
  imports: [
      ConfigModule.forRoot({debug: true}),
      LoggerModule.forRoot({level: LogLevelEnum.DEBUG}),
      UsersModule,
  ],
  controllers: [AppController],
  // available providers inside this module
  providers: [AppService],
  // providers subset available outside this module
  // serves as module public api
  // exports: [],
})
export class AppModule {}
