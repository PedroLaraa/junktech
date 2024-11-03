import { Module } from "@nestjs/common";
import { CreatePickupPointUseCase } from "../../../pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { PickupPointController } from "./pickup_point/pickupPoint.controller";
import { DatabaseModule } from "src/infra/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [PickupPointController],
  providers: [CreatePickupPointUseCase],
})
export class PickupPointModule {}
