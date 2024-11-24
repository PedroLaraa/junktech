import { User } from "../../../../../modules/user/entities/user.entity";

export class UserViewModule {
  static toHttp({ username, email, id, user_type, name, cnpj_cpf, phone, createdAt }: User){
    return {
      id, 
      username, 
      email, 
      user_type,
      phone,
      name,
      cnpj_cpf,
      createdAt
    }
  }
}