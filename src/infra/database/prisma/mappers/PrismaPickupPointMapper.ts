import { PickupPoint } from "../../../../pickup_point/entities/pickup_point.entity";
import {Pickup_Point as PickupPointRaw} from "@prisma/client"

export class PrismaPickupPointMapper {

  static toPrisma({ id, geolocation, owner_id, createdAt }: PickupPoint): PickupPointRaw {
    return {
      id,
      geolocation,
      owner_id,
      createdAt,
    }
  }

}
