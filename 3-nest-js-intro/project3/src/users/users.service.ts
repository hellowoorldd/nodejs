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

	findUser(index: number) {
		return this.#users[index];
	}

	createUser(userDto: UserDto): UserDto {
		const newUser = {
			id: new Date().getTime(),
			...userDto,
		}
		this.#users.push(newUser);
		return newUser;
	}
}
