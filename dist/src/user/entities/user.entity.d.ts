import { PickupPoint } from "src/pickup_point/entities/pickup_point.entity";
import { Replace } from "utils/replace";
interface UserSchema {
    email: string;
    password: string;
    username: string;
    user_type: number;
    createdAt: Date;
    pickup_points?: PickupPoint[];
}
export declare class User {
    private props;
    private _id;
    constructor(props: Replace<UserSchema, {
        createdAt?: Date;
    }>, id?: string);
    get id(): string;
    get email(): string;
    set email(email: string);
    get password(): string;
    set password(password: string);
    get username(): string;
    set username(username: string);
    get user_type(): number;
    set user_type(user_type: number);
    get pickup_points(): PickupPoint[];
    set pickup_points(pickup_points: PickupPoint[]);
    get createdAt(): Date;
}
export {};
