import { Controller, HttpCode, HttpStatus, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthRequestModel } from "./models/authRequestModels";
import { SignInUseCase } from "../../../../modules/auth/useCases/signInUseCase/signInUseCase";
import { LocalAuthGuard } from "./guards/localAuth.Guard";
import { Public } from "./decorators/isPublic";

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

}
