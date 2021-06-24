import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwoFactorAuthenticationModule } from './two-factor-authentication/two-factor-authentication.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TwoFactorAuthenticationModule],
})
export class AppModule {}
