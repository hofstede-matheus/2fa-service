import { Module } from '@nestjs/common';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { TwoFactorAuthenticationController } from './two-factor-authentication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TwoFactor, TwoFactorSchema } from './schema/twoFactorAuthentication.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TwoFactor.name, schema: TwoFactorSchema }])],
  controllers: [TwoFactorAuthenticationController],
  providers: [TwoFactorAuthenticationService]
})
export class TwoFactorAuthenticationModule {}
