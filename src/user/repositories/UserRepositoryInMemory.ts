import { User } from "../entities/user.entity";
import { userRepository } from "./UserRepository";

export class UserRepositoryInMemory implements userRepository {

  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

}