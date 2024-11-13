import { Injectable } from "@nestjs/common";
import { pickupPointRepository } from "../../../../modules/pickup_point/repositories/PickupPointRepository"
import { PrismaService } from "../prisma.service";
import { PickupPoint } from "../../../../modules/pickup_point/entities/pickup_point.entity";
import { PrismaPickupPointMapper } from "../mappers/PrismaPickupPointMapper";

@Injectable()
export class PrismaPickupPointRepository implements pickupPointRepository {
  constructor(private prisma: PrismaService) {};

  async create(pickupPoint: PickupPoint): Promise<void> {
    const pickupPointRaw = PrismaPickupPointMapper.toPrisma(pickupPoint);

    await this.prisma.pickup_Point.create({
      data: pickupPointRaw
    });
  };

  async get(): Promise<PickupPoint[]> {
    const pickupPoint = await this.prisma.pickup_Point.findMany()

    return pickupPoint.map(PrismaPickupPointMapper.toDomain);
  }
};
