import { User } from "../../entities/user.entity";
import { userRepository } from "../../repositories/UserRepository";
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: userRepository);
    execute({ email, password, username, user_type }: {
        email: any;
        password: any;
        username: any;
        user_type: any;
    }): Promise<User>;
}
