import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateUserUseCase } from '../useCases/validateUserUseCase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor( private validateUserUseCase: ValidateUserUseCase) {
    super({
      usernameField: 'username'
    });
  }

  async validate(username: string, password: string): Promise<any> {
    return await this.validateUserUseCase.execute({
      username,
      password
    })
  }
}