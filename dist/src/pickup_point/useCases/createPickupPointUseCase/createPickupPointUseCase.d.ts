import { pickupPointRepository } from "../../repositories/PickupPointRepository";
import { PickupPoint } from "../../entities/pickup_point.entity";
export declare class CreatePickupPointUseCase {
    private pickupPointRepository;
    constructor(pickupPointRepository: pickupPointRepository);
    execute({ geolocation, owner_id }: {
        geolocation: any;
        owner_id: any;
    }): Promise<PickupPoint>;
}
