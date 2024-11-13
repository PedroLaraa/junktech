import { PickupPointRepositoryInMemory } from "../../repositories/PIckupPointRepositoryInMemory";
import { CreatePickupPointUseCase } from "./createPickupPointUseCase";

let createPickupPointUseCase: CreatePickupPointUseCase

let pickupPointRepositoryInMemory: PickupPointRepositoryInMemory

describe("Create Pickup Point", () => {
  beforeEach(() => {
    pickupPointRepositoryInMemory = new PickupPointRepositoryInMemory()
    createPickupPointUseCase = new CreatePickupPointUseCase(pickupPointRepositoryInMemory)
  })

  it('Should be able to create a new pickup point', async () => {
    const pickupPoint = await createPickupPointUseCase.execute ({
      geolocation: "-19.933128, -44.195414",
      owner_id: "1"
    })

    expect(pickupPointRepositoryInMemory.pickupPoint).toEqual([pickupPoint])
  })
})
