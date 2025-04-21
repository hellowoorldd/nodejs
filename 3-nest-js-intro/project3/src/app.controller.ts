import {Body, Controller, Get, Post, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {GreetingDto} from './greeting.dto'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async addGreeting(@Body() greetingDto: GreetingDto): Promise<void> {
    await this.appService.addGreeting(greetingDto.greeting);
  }

  // localhost:3000/items/1
  @Get('items/:id')
  findGreeting(@Param('id') greetingId: string): string {
    return this.appService.findGreeting(greetingId);
  }

  // localhost:3000/?findOne=1
  @Get('findOne')
  findGreetingByQueryParam(@Query('greetingId') greetingId): string {
    return this.appService.findGreeting(greetingId);
  }
}
