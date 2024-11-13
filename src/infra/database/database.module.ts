import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { userRepository } from "../../modules/user/repositories/UserRepository";
import { PrismaUserRepository } from "./prisma/repositories/PrismaUserRepository";
import { pickupPointRepository } from "../../modules/pickup_point/repositories/PickupPointRepository";
import { PrismaPickupPointRepository } from "./prisma/repositories/PrismaPickupPointRespository";

@Module({
  providers: [PrismaService,
    {
      provide: userRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: pickupPointRepository,
      useClass: PrismaPickupPointRepository
    },
  ],
  exports: [userRepository, pickupPointRepository],
})
export class DatabaseModule{}