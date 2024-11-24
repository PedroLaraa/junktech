import { Request } from "express";

export class AuthenticatedRequestModel extends Request {
  user: {
    id: string;
    username: string;
    email: string;
    user_type: number;
    name: string;
    phone: string;
    cnpj_cpf: string;
  }
}
