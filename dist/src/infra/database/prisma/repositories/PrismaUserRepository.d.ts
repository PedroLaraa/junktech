import { User } from "../../../../user/entities/user.entity";
import { userRepository } from "../../../../user/repositories/UserRepository";
import { PrismaService } from "../prisma.service";
export declare class PrismaUserRepository implements userRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: User): Promise<void>;
}
