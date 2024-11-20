import { User } from "../entities/user.entity";

export abstract class userRepository {
  abstract create (user: User): Promise<void>

  // abstract update (user: User): Promise<void>

  // abstract delete (user: User): Promise<void>

  abstract findByEmail(email: string): Promise<User | null>
}
