import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserBody {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email:  string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNumber()
  @IsNotEmpty()
  user_type: number;
}