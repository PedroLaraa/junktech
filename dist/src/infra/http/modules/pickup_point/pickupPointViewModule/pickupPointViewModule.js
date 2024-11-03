"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupPointViewModule = void 0;
class PickupPointViewModule {
    static toHttp({ geolocation, owner_id, createdAt }) {
        return {
            geolocation,
            owner_id,
            createdAt
        };
    }
}
exports.PickupPointViewModule = PickupPointViewModule;
//# sourceMappingURL=pickupPointViewModule.js.map