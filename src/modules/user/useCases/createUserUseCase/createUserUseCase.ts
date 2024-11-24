import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { User } from "../../entities/user.entity";
import { userRepository } from "../../repositories/UserRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CreateUserRequest {
  email: string,
  password: string,
  username: string,
  name: string,
  phone: string,
  cnpj_cpf: string,
  user_type: number
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: userRepository) {}

  async execute({ email, password, username, user_type, name, phone, cnpj_cpf }) {
    const user = new User ({
      email,
      password: await hash(password, 10),
      username,
      name,
      phone,
      cnpj_cpf,
      user_type
    })

    await this.userRepository.create(user)

    return user
  }
}