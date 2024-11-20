import { Injectable } from "@nestjs/common";
import { User } from "../../../user/entities/user.entity";
import { UserPayload } from "../../models/userPayload";
import { JwtService } from "@nestjs/jwt";

interface SignInRequest {
  user: User
}

@Injectable()
export class SignInUseCase {
  constructor(private jwtService: JwtService) {}

  async execute({ user }: SignInRequest) {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      username: user.username,
      user_type: user.user_type
    };

    const jwtToken = this.jwtService.sign(payload);

    return jwtToken;
  }
}