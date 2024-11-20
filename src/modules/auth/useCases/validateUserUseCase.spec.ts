import { ValidateUserUseCase } from "./validateUserUseCase";
import { UserRepositoryInMemory } from "../../user/repositories/UserRepositoryInMemory";
import { User } from "../../user/entities/user.entity";
import { hash } from "bcrypt";

let validateUserUseCase: ValidateUserUseCase

let userRepositoryInMemory: UserRepositoryInMemory

describe("Validate User", () => {

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory)
  })

  it("Should be able to return user if credentials are correct", async () => {

    const userPasswordWithoutEncryption = 'pedro';

    const user = new User({
      username: "pedro",
      password: await hash(userPasswordWithoutEncryption, 10),
      email: "pedro@gmail.com",
      user_type: 1
    });

    userRepositoryInMemory.users = [user];

    const result = await validateUserUseCase.execute({
      email: user.email,
      password: userPasswordWithoutEncryption
    });

    console.log(result)

    expect(result).toEqual(user);
  })


})
