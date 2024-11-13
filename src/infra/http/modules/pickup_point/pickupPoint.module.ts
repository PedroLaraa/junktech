import { Module } from "@nestjs/common";
import { CreatePickupPointUseCase } from "../../../../modules/pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { PickupPointController } from "./pickupPoint.controller";
import { DatabaseModule } from "src/infra/database/database.module";
import { GetPickupPointUseCase } from "../../../../modules/pickup_point/useCases/getPickupPointUseCase/getPickupPointUseCase";

@Module({
  imports: [DatabaseModule],
  controllers: [PickupPointController],
  providers: [CreatePickupPointUseCase, GetPickupPointUseCase],
})
export class PickupPointModule {}
