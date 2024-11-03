"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickupPoint = void 0;
class PickupPoint {
    constructor(props, id) {
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date()
        };
        this._id = id || crypto.randomUUID();
    }
    get id() {
        return this._id;
    }
    get owner_id() {
        return this.props.owner_id;
    }
    set owner_id(owner_id) {
        this.owner_id = owner_id;
    }
    get geolocation() {
        return this.props.geolocation;
    }
    set geolocation(geolocation) {
        this.geolocation = geolocation;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    set createdAt(createdAt) {
        this.createdAt = createdAt;
    }
}
exports.PickupPoint = PickupPoint;
//# sourceMappingURL=pickup_point.entity.js.map