import { IsNotEmpty, IsString } from "class-validator";
import { User } from "../../../../../modules/user/entities/user.entity";

export class CreatePickupPointBody {
  @IsNotEmpty()
  @IsString()
  geolocation: string;

  @IsNotEmpty()
  owner_id: string;
}