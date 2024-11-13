import { compare } from "bcrypt"
import { UserRepositoryInMemory } from "../../repositories/userRepositoryInMemory"
import { CreateUserUseCase } from "./createUserUseCase"

let createUserUseCase: CreateUserUseCase

let userRepositoryInMemory: UserRepositoryInMemory

describe("Create User", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory()
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
  })

  it('Should be able to create user with password encrypted', async () => {
    
    const userPasswordWithoutEncryption = "pedro"

    const user = await createUserUseCase.execute({
      email: "pedro@mail.com",
      password: "pedro",
      username: userPasswordWithoutEncryption,
      user_type: "1"
    })

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncryption,
      user.password
    )

    expect(userHasPasswordEncrypted).toBeTruthy()
  })

})