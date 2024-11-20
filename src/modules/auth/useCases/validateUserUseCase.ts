import { Injectable, UnauthorizedException } from "@nestjs/common";
import { userRepository } from "../../user/repositories/UserRepository";
import { compare } from  "bcrypt";

interface ValidateUserRequest {
  email: string
  password: string
}

@Injectable()
export class ValidateUserUseCase {
  constructor(private userRepository: userRepository) {}

  async execute({ email, password }: ValidateUserRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new UnauthorizedException('Email ou senha incorretos');

    const isPasswordMatched = await compare(password, user.password);

    if (!isPasswordMatched)
      throw new UnauthorizedException('Email ou senha incorretos');

    return user;
  }
}