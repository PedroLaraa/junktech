import { User } from "../entities/user.entity";
import { userRepository } from "./UserRepository";

export class UserRepositoryInMemory implements userRepository {

  public users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = this.users.find(user=>user.username === username)

    if(!user) 
      return null

    return user

  }

}