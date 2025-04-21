import {Injectable, OnModuleInit} from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService implements OnModuleInit {
	#users: UserDto[] = [];

	onModuleInit() {
		console.log(`UsersService initialized`);
	}

	getUsers() {
		return this.#users;
	}

	createUser(userDto: UserDto) {
		const newUser = {
			id: new Date().getTime(),
			...userDto,
		}
		this.#users.push(newUser);
		return newUser;
	}
}
