import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { LocalStrategy } from "../../../../auth/strategies/local.strategy";
import { ValidateUserUseCase } from "../../../../auth/useCases/validateUserUseCase";
import { UserModule } from "../user.module";
import { DatabaseModule } from "../../../database/database.module";
import { signInDTOValidateMiddleware } from "./middleware/signInDTOValidateMiddleware.middleware";
import { SignInUseCase } from "src/auth/useCases/signInUseCase/signInUseCase";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../../../../auth/strategies/jwt.strategy";

@Module({
  imports: [UserModule, DatabaseModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE },
  })],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy,ValidateUserUseCase, SignInUseCase],
})

export class AuthModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(signInDTOValidateMiddleware).forRoutes('/signIn')
  }
}
