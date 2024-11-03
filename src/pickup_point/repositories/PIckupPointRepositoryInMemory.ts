import { PickupPoint } from "../entities/pickup_point.entity";
import { pickupPointRepository } from "./PickupPointRepository";

export class PickupPointRepositoryInMemory implements pickupPointRepository {

  public pickupPoint: PickupPoint[] = []

  async create(pickupPoint: PickupPoint): Promise<void> {
    this.pickupPoint.push(pickupPoint);
  }

}
