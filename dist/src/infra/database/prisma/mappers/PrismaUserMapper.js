"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserMapper = void 0;
const user_entity_1 = require("../../../../modules/user/entities/user.entity");
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
    static toDomain({ id, ...userData }) {
        return new user_entity_1.User({
            ...userData
        }, id);
    }
}
exports.PrismaUserMapper = PrismaUserMapper;
//# sourceMappingURL=PrismaUserMapper.js.map