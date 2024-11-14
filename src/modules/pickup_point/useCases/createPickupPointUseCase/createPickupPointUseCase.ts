import { Injectable } from "@nestjs/common";
import { User } from "../../../user/entities/user.entity";
import { pickupPointRepository } from "../../repositories/PickupPointRepository";
import { PickupPoint } from "../../entities/pickup_point.entity";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface CreatePickupPointRequest {
  geolocation: string,
  owner_id: User
}

@Injectable()
export class CreatePickupPointUseCase {
  constructor(private pickupPointRepository: pickupPointRepository) {}

  async execute({ geolocation, owner_id }) {
    const pickupPoint = new PickupPoint({
      geolocation,
      owner_id
    })

    await this.pickupPointRepository.create(pickupPoint)

    return pickupPoint

  }
}