import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class SignInBody {

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string

}
