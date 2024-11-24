import { User } from "../../../../modules/user/entities/user.entity";
import { User as UserRaw } from "prisma/generated/client";
export declare class PrismaUserMapper {
    static toPrisma({ id, username, email, password, user_type, name, phone, cnpj_cpf, createdAt }: User): UserRaw;
    static toDomain({ id, ...userData }: UserRaw): User;
}
