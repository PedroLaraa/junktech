import { CreatePickupPointUseCase } from "../../../../pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { CreatePickupPointBody } from "./dtos/createPickupPointBody";
export declare class PickupPointController {
    private createPickupPointUseCase;
    constructor(createPickupPointUseCase: CreatePickupPointUseCase);
    createPickupPoint(body: CreatePickupPointBody): Promise<{
        geolocation: string;
        owner_id: string;
        createdAt: Date;
    }>;
}
