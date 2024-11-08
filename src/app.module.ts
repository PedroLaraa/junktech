import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user.module';
import { DatabaseModule } from './infra/database/database.module';
import { PickupPointModule } from './infra/http/modules/pickupPoint.module';
import { AuthModule } from './infra/http/modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './infra/http/modules/auth/guards/jwtAuth.Guard';

@Module({
  imports: [UserModule, DatabaseModule, PickupPointModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
  ],
})
export class AppModule {}
