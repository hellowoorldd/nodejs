import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserDto} from './user.dto';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	getUsers(): UserDto[] {
		return this.usersService.getUsers();
	}

	@Post()
	createUser(@Body() userDto: UserDto) {
		return this.usersService.createUser(userDto);
	}
}
