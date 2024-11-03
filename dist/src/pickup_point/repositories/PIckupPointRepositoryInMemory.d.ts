import { PickupPoint } from "../entities/pickup_point.entity";
import { pickupPointRepository } from "./PickupPointRepository";
export declare class PickupPointRepositoryInMemory implements pickupPointRepository {
    pickupPoint: PickupPoint[];
    create(pickupPoint: PickupPoint): Promise<void>;
}
