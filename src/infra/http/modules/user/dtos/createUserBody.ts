import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateUserBody {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email:  string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber("BR")
  phone: string;

  @IsString()
  @IsNotEmpty()
  cnpj_cpf: string;

  @IsNumber()
  @IsNotEmpty()
  user_type: number;
}