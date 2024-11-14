import { Injectable, NotFoundException } from "@nestjs/common";
import { pickupPointRepository } from "../../repositories/PickupPointRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

@Injectable()
export class GetPickupPointUseCase {

  constructor(private pickupPointRepository: pickupPointRepository) {}

  async execute() {
    const pickupPoint = await this.pickupPointRepository.get();

    if (!pickupPoint) throw new NotFoundException();

    return pickupPoint;
  }
}
