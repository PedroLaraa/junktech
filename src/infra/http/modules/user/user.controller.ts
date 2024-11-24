import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "../../../../modules/user/useCases/createUserUseCase/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModule } from "./userViewModule/userViewModule";
import { Public } from "../auth/decorators/isPublic";

@Controller('user')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {};

  @Post()
  @Public()
  async createUser(@Body() body: CreateUserBody){
    const { email, password, username, user_type, name, cnpj_cpf, phone } = body;

    const user = await this.createUserUseCase.execute({
      email,
      password,
      username,
      user_type,
      name,
      phone,
      cnpj_cpf
    });

    return UserViewModule.toHttp(user);
  };
};