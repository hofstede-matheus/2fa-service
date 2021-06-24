import { Inject } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import console from 'console';
import { Model } from 'mongoose';
import { EmailSenderService } from 'src/code-senders/senders/email-sender.service';
import { GenerateTwoFactorAuthenticationDto } from './dto/generate-two-factor-authentication.dto';
import { TwoFactor, TwoFactorDocument } from './schema/twoFactorAuthentication.schema';

@Injectable()
export class TwoFactorAuthenticationService {

  constructor(
    @InjectModel(TwoFactor.name) private twoFactorModel: Model<TwoFactorDocument>,
    private emailService: EmailSenderService,
    ) {}


  async generate(generateTwoFactorAuthenticationDto: GenerateTwoFactorAuthenticationDto) {

    const twoFA = await this.twoFactorModel.findOne({userId: generateTwoFactorAuthenticationDto.userId}).exec()
    const createdTwoFactor = new this.twoFactorModel(generateTwoFactorAuthenticationDto);

    const twoFactorCode = (Math.floor(Math.random() * 8999) + 1000).toString()
    createdTwoFactor.code = twoFactorCode

    await this.emailService.sendCode(twoFactorCode, createdTwoFactor.safeEmail)

    if (twoFA) {
      twoFA.code = twoFactorCode
      twoFA.safePhone = generateTwoFactorAuthenticationDto.safePhone
      twoFA.safeEmail = generateTwoFactorAuthenticationDto.safeEmail
      twoFA.data = generateTwoFactorAuthenticationDto.data

      twoFA.save()
      return { status: 'success', data: null }
    }
    
    createdTwoFactor.save()
    
    return { status: 'success', data: null };
  }

  findAll() {
    return this.twoFactorModel.find();
  }

  async verify(id: string, code: string) {
    const twoFA = await this.twoFactorModel.findOne({userId: id, code: code}).exec()
    if (twoFA) {
      twoFA.remove()
      return { status: 'success', data: twoFA.data }
    }
    else return { status: 'error', data: null }
  }
}
