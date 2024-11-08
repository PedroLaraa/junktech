import { User } from "../entities/user.entity";
import { userRepository } from "./UserRepository";
export declare class UserRepositoryInMemory implements userRepository {
    users: User[];
    create(user: User): Promise<void>;
    findByUsername(username: string): Promise<User | null>;
}
