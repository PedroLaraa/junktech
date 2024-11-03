import { User } from "src/user/entities/user.entity";
import { Replace } from "utils/replace";

interface PickupPointSchema {
  geolocation: string
  owner_id: string
  createdAt: Date
}

export class PickupPoint {
  props: PickupPointSchema;
  _id: string

  constructor(props: Replace<PickupPointSchema, {createdAt?: Date}>, id?: string){
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date()
    }
    this._id = id || crypto.randomUUID()
  }

  get id(): string{
    return this._id
  }

  get owner_id(): string{
    return this.props.owner_id
  }

  set owner_id(owner_id: string){
    this.owner_id = owner_id
  }

  get geolocation(): string{
    return this.props.geolocation
  }

  set geolocation(geolocation: string){
    this.geolocation = geolocation
  }

  get createdAt(): Date{
    return this.props.createdAt
  }

  set createdAt(createdAt: Date){
    this.createdAt = createdAt
  }
}
