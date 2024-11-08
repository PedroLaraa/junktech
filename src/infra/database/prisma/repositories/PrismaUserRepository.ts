import { User } from "../../../../user/entities/user.entity";
import { userRepository } from "../../../../user/repositories/UserRepository";
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

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        username
      }
    });

    if(!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
}
