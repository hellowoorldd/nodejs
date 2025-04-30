import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserDto} from './user.dto';
import {UsersService} from './users.service';
import {LoggerService} from '../logger/logger.service'

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private readonly loggerService: LoggerService
	) {}

	@Get()
	getUsers(): UserDto[] {
		return this.usersService.getUsers();
	}

	@Post()
	createUser(@Body() userDto: UserDto) {
		const newUser = this.usersService.createUser(userDto);
		this.loggerService.print(`User ${JSON.stringify(newUser)} created`);
		return newUser;
	}
}
