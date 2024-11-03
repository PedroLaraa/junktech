import { PickupPoint } from "../../../../../pickup_point/entities/pickup_point.entity";
export declare class PickupPointViewModule {
    static toHttp({ geolocation, owner_id, createdAt }: PickupPoint): {
        geolocation: string;
        owner_id: string;
        createdAt: Date;
    };
}
