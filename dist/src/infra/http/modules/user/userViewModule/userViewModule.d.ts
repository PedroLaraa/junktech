import { User } from "../../../../../modules/user/entities/user.entity";
export declare class UserViewModule {
    static toHttp({ username, email, id, user_type, name, cnpj_cpf, phone, createdAt }: User): {
        id: string;
        username: string;
        email: string;
        user_type: number;
        phone: string;
        name: string;
        cnpj_cpf: string;
        createdAt: Date;
    };
}
