import { User } from "../../../../modules/user/entities/user.entity";
import { User as UserRaw } from "prisma/generated/client";

export class PrismaUserMapper {

  static toPrisma({ id, username, email, password, user_type, name, phone, cnpj_cpf, createdAt }: User): UserRaw {
    return {
      id,
      username, 
      email, 
      password, 
      user_type,
      name,
      phone,
      cnpj_cpf,
      createdAt
    }
  }

  static toDomain({id, ...userData}: UserRaw): User {
    return new User(
      {
        ...userData
      },
      id,
    )
  }

}