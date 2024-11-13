import { User } from "../../../../../modules/user/entities/user.entity";

export class UserViewModule {
  static toHttp({ username, email, id, user_type, createdAt }: User){
    return {
      id, 
      username, 
      email, 
      user_type, 
      createdAt
    }
  }
}