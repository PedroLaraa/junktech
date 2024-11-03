import { Body, Controller, Post } from "@nestjs/common";
import { CreatePickupPointUseCase } from "../../../../pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { CreatePickupPointBody } from "./dtos/createPickupPointBody";
import { PickupPointViewModule } from "./pickupPointViewModule/pickupPointViewModule";

@Controller('pickup-point')
export class PickupPointController {
  constructor(private createPickupPointUseCase: CreatePickupPointUseCase) {};

  @Post()
  async createPickupPoint(@Body() body: CreatePickupPointBody){
    const {geolocation, owner_id} = body;

    const pickupPoint = await this.createPickupPointUseCase.execute({
      geolocation,
      owner_id
    });

    return PickupPointViewModule.toHttp(pickupPoint);
  };
};