"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupPointRepositoryInMemory = void 0;
class PickupPointRepositoryInMemory {
    constructor() {
        this.pickupPoint = [];
    }
    async create(pickupPoint) {
        this.pickupPoint.push(pickupPoint);
    }
}
exports.PickupPointRepositoryInMemory = PickupPointRepositoryInMemory;
//# sourceMappingURL=PIckupPointRepositoryInMemory.js.map