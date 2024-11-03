"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
class PrismaUserMapper {
    static toPrisma({ id, username, email, password, user_type, createdAt }) {
        return {
            id,
            username,
            email,
            password,
            user_type,
            createdAt
        };
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=PrismaUserMapper.js.map