import { PickupPoint } from "../../../../../modules/pickup_point/entities/pickup_point.entity";

export class PickupPointViewModule {
  static toHttp({ geolocation, owner_id, createdAt }: PickupPoint) {
    return {
      geolocation,
      owner_id,
      createdAt
    }
  }
}
