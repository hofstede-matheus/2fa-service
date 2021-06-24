import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwoFactorAuthenticationModule } from './two-factor-authentication/two-factor-authentication.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TwoFactorAuthenticationModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
})
export class AppModule {}
