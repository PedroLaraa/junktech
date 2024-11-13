import { pickupPointRepository } from "../../../../modules/pickup_point/repositories/PickupPointRepository";
import { PrismaService } from "../prisma.service";
import { PickupPoint } from "../../../../modules/pickup_point/entities/pickup_point.entity";
export declare class PrismaPickupPointRepository implements pickupPointRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(pickupPoint: PickupPoint): Promise<void>;
    get(): Promise<PickupPoint[]>;
}
