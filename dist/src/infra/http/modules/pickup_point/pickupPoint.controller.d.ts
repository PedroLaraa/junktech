import { CreatePickupPointUseCase } from "../../../../modules/pickup_point/useCases/createPickupPointUseCase/createPickupPointUseCase";
import { CreatePickupPointBody } from "./dtos/createPickupPointBody";
import { GetPickupPointUseCase } from "../../../../modules/pickup_point/useCases/getPickupPointUseCase/getPickupPointUseCase";
export declare class PickupPointController {
    private createPickupPointUseCase;
    private getPickupPointUseCas;
    constructor(createPickupPointUseCase: CreatePickupPointUseCase, getPickupPointUseCas: GetPickupPointUseCase);
    createPickupPoint(body: CreatePickupPointBody): Promise<{
        geolocation: string;
        owner_id: string;
        createdAt: Date;
    }>;
    getAllPickupPoint(): Promise<{
        geolocation: string;
        owner_id: string;
        createdAt: Date;
    }[]>;
}
