import { IsEmail, IsString, Length, IsStrongPassword } from 'class-validator';

export class UserDto {
	@IsEmail()
	email: string;

	@IsString()
	@Length(3)
	username: string;

	@IsStrongPassword()
	password: string;
}
