import { Request } from 'express'
import { User } from '../../../../../user/entities/user.entity'

export class AuthRequestModel extends Request {
  user: User
}