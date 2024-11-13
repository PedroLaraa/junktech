import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreatePickupPointUseCase } from "../../../../modules/pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { CreatePickupPointBody } from "./dtos/createPickupPointBody";
import { PickupPointViewModule } from "./pickupPointViewModule/pickupPointViewModule";
import { Public } from "../auth/decorators/isPublic";
import { GetPickupPointUseCase } from "../../../../modules/pickup_point/useCases/getPickupPointUseCase/getPickupPointUseCase";

@Controller('pickup-point')
export class PickupPointController {
  constructor(
    private createPickupPointUseCase: CreatePickupPointUseCase,
    private getPickupPointUseCas: GetPickupPointUseCase
  ) {};

  @Post()
  async createPickupPoint(@Body() body: CreatePickupPointBody){
    const {geolocation, owner_id} = body;

    const pickupPoint = await this.createPickupPointUseCase.execute({
      geolocation,
      owner_id
    });

    return PickupPointViewModule.toHttp(pickupPoint);
  };

  @Get()
  @Public()
  async getAllPickupPoint() {
    const pickupPoint = await this.getPickupPointUseCas.execute()

    return pickupPoint.map(PickupPointViewModule.toHttp)
  }
};