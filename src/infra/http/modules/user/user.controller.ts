import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserUseCase } from "src/user/useCases/createUserUseCase/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
import { UserViewModule } from "./userViewModule/userViewModule";

@Controller('user')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {};

  @Post()
  async createUser(@Body() body: CreateUserBody){
    const { email, password, username, user_type } = body;

    const user = await this.createUserUseCase.execute({
      email,
      password,
      username,
      user_type
    });

    return UserViewModule.toHttp(user);
  };
};