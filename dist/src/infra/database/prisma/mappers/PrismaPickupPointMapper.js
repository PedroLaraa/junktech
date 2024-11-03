"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPickupPointMapper = void 0;
class PrismaPickupPointMapper {
    static toPrisma({ id, geolocation, owner_id, createdAt }) {
        return {
            id,
            geolocation,
            owner_id,
            createdAt,
        };
    }
}
exports.PrismaPickupPointMapper = PrismaPickupPointMapper;
//# sourceMappingURL=PrismaPickupPointMapper.js.map