import { Request } from 'express'
import { User } from '../../../../../modules/user/entities/user.entity'

export class AuthRequestModel extends Request {
  user: User
}