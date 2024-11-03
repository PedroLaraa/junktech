import { PickupPoint } from "../entities/pickup_point.entity";
export declare abstract class pickupPointRepository {
    abstract create(pickupPoint: PickupPoint): Promise<void>;
}
