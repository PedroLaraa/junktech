import { CreateUserUseCase } from "../../../../modules/user/useCases/createUserUseCase/createUserUseCase";
import { CreateUserBody } from "./dtos/createUserBody";
export declare class UserController {
    private createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    createUser(body: CreateUserBody): Promise<{
        id: string;
        username: string;
        email: string;
        user_type: number;
        phone: string;
        name: string;
        cnpj_cpf: string;
        createdAt: Date;
    }>;
}
