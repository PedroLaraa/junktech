import { BadRequestException, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { SignInBody } from "../dtos/SigninBody";
import { validate } from "class-validator";

@Injectable()
export class signInDTOValidateMiddleware implements NestMiddleware {

  async use(req: Request, res: Response, next: NextFunction) {

    const body = req.body

    const signInBody = new SignInBody

    signInBody.password = body.password
    signInBody.username = body.username

    const validations = await validate(signInBody)

    if(validations.length)
      throw new BadRequestException(validations)
    
    next()
  }

}