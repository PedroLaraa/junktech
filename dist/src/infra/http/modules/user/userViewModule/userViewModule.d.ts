import { User } from "../../../../../user/entities/user.entity";
export declare class UserViewModule {
    static toHttp({ username, email, id, user_type, createdAt }: User): {
        id: string;
        username: string;
        email: string;
        user_type: number;
        createdAt: Date;
    };
}
