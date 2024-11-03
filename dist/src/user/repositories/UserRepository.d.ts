import { User } from "../entities/user.entity";
export declare abstract class userRepository {
    abstract create(user: User): Promise<void>;
}
