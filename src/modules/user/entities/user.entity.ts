import { PickupPoint } from "../../pickup_point/entities/pickup_point.entity";
import { Replace } from "utils/replace";

interface UserSchema {
  email: string
  password: string
  username: string
  name: string
  cnpj_cpf: string
  phone: string
  user_type: number
  createdAt: Date
  pickup_points?: PickupPoint[]
}

export class User {
  private props:  UserSchema
  private _id: string

  constructor (props: Replace<UserSchema, {createdAt?: Date}>, id?: string) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    }
    this._id = id || crypto.randomUUID()
  }

  get id(): string {
    return this._id
  }

  get email(): string {
    return this.props.email
  }

  set email( email: string){
    this.props.email = email
  }

  get password(): string {
    return this.props.password
  }

  set password( password: string){
    this.props.password = password
  }

  get username(): string {
    return this.props.username
  }

  set username( username: string){
    this.props.username = username
  }

  get name(): string {
    return this.props.name
  }

  set name( name: string){
    this.props.name = name
  }

  get phone(): string {
    return this.props.phone
  }

  set phone( phone: string){
    this.props.phone = phone
  }

  get cnpj_cpf(): string {
    return this.props.cnpj_cpf
  }

  set cnpj_cpf( cnpj_cpf: string){
    this.props.cnpj_cpf = cnpj_cpf
  }

  get user_type(): number {
    return this.props.user_type
  }

  set user_type( user_type: number){
    this.props.user_type = user_type
  }

  get pickup_points(): PickupPoint[] {
    return this.pickup_points
  }

  set pickup_points( pickup_points: PickupPoint[]){
    this.props.pickup_points = pickup_points
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

}
