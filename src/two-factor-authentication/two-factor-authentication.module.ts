import { Module } from '@nestjs/common';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { TwoFactorAuthenticationController } from './two-factor-authentication.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TwoFactor, TwoFactorSchema } from './schema/twoFactorAuthentication.schema';
import { EmailSenderService } from 'src/code-senders/senders/email-sender.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: TwoFactor.name, schema: TwoFactorSchema }])],
  controllers: [TwoFactorAuthenticationController],
  providers: [TwoFactorAuthenticationService, EmailSenderService]
})
export class TwoFactorAuthenticationModule {}
