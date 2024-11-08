import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthRequestModel } from "./models/authRequestModels";
import { SignInUseCase } from "../../../../auth/useCases/signInUseCase/signInUseCase";
import { LocalAuthGuard } from "./guards/localAuth.Guard";
import { Public } from "./decorators/isPublic";
import { AuthenticatedRequestModel } from "./models/authenticatedRequestModel";

@Controller()
export class AuthController {

  constructor(private signInUseCase: SignInUseCase) {}

  @Post('signIn')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async signIn(@Request() request: AuthRequestModel){
    const access_token = await this.signInUseCase.execute({ user: request.user })
  
    return { access_token }
  }

  @Get('test')
  @UseGuards(AuthGuard('jwt'))
  async test(@Request() request: AuthenticatedRequestModel) {
    return request.user;
  }

}
