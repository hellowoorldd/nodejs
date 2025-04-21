import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';


// https://docs.nestjs.com/modules
@Module({
  // list of modules which providers to be available in this module
  imports: [UsersModule],
  controllers: [AppController],
  // available providers inside this module
  providers: [AppService],
  // providers subset available outside this module
  // serves as module public api
  // exports: [],
})
export class AppModule {}
