import { User } from "../../../../modules/user/entities/user.entity";
import { userRepository } from "../../../../modules/user/repositories/UserRepository";
import { PrismaService } from "../prisma.service";
export declare class PrismaUserRepository implements userRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}
