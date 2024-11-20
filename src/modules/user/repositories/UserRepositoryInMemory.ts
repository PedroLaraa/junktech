import { User } from "../entities/user.entity";
import { userRepository } from "./UserRepository";

export class UserRepositoryInMemory implements userRepository {

  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user=>user.email === email)

    if(!user) 
      return null

    return user

  }

}