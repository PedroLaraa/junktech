import { User } from "../../../../modules/user/entities/user.entity";
import { userRepository } from "../../../../modules/user/repositories/UserRepository";
import { PrismaService } from "../prisma.service";
import { PrismaUserMapper } from "../mappers/PrismaUserMapper";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements userRepository {
  
  constructor(private prisma: PrismaService){}
  
  async create(user: User): Promise<void> {

    const userRaw = PrismaUserMapper.toPrisma(user)

    await this.prisma.user.create({
      data: userRaw
    })
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        email
      }
    });

    if(!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
}
