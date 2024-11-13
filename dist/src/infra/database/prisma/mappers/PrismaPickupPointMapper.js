"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaPickupPointMapper = void 0;
const pickup_point_entity_1 = require("../../../../modules/pickup_point/entities/pickup_point.entity");
class PrismaPickupPointMapper {
    static toPrisma({ id, geolocation, owner_id, createdAt }) {
        return {
            id,
            geolocation,
            owner_id,
            createdAt,
        };
    }
    static toDomain({ id, geolocation, owner_id, createdAt }) {
        return new pickup_point_entity_1.PickupPoint({
            geolocation,
            owner_id,
            createdAt
        }, id);
    }
}
exports.PrismaPickupPointMapper = PrismaPickupPointMapper;
//# sourceMappingURL=PrismaPickupPointMapper.js.map