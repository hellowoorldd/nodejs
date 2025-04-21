import { IsEmail, IsString, Length } from 'class-validator';

export class UserDto {
	@IsEmail()
	email: string;

	@IsString()
	@Length(3)
	username: string;
}
