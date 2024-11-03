import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { PickupPointModule } from './infra/http/modules/pickupPoint.module';

@Module({
  imports: [UserModule, DatabaseModule, PickupPointModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
