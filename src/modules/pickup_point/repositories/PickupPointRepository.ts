import { PickupPoint } from "../entities/pickup_point.entity";

export abstract class pickupPointRepository {
  abstract create (pickupPoint: PickupPoint): Promise<void>

  abstract get (): Promise< PickupPoint[]>
}