import { Replace } from "utils/replace";
interface PickupPointSchema {
    geolocation: string;
    owner_id: string;
    createdAt: Date;
}
export declare class PickupPoint {
    props: PickupPointSchema;
    _id: string;
    constructor(props: Replace<PickupPointSchema, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    get owner_id(): string;
    set owner_id(owner_id: string);
    get geolocation(): string;
    set geolocation(geolocation: string);
    get createdAt(): Date;
    set createdAt(createdAt: Date);
}
export {};
