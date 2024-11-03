import { Module } from "@nestjs/common";
import { UserController } from "./user/user.controller";
import { CreateUserUseCase } from "../../../user/useCases/createUserUseCase/createUserUseCase";
import { DatabaseModule } from "src/infra/database/database.module";


@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase]
})
export class UserModule {}