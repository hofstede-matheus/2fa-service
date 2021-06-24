import { Injectable } from '@nestjs/common';
import { GenerateTwoFactorAuthenticationDto } from './dto/create-two-factor-authentication.dto';
import { UpdateTwoFactorAuthenticationDto } from './dto/update-two-factor-authentication.dto';

@Injectable()
export class TwoFactorAuthenticationService {
  create(createTwoFactorAuthenticationDto: GenerateTwoFactorAuthenticationDto) {
    
    return 'This action adds a new twoFactorAuthentication';
  }

  findAll() {
    return `This action returns all twoFactorAuthentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} twoFactorAuthentication`;
  }

  update(id: number, updateTwoFactorAuthenticationDto: UpdateTwoFactorAuthenticationDto) {
    return `This action updates a #${id} twoFactorAuthentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} twoFactorAuthentication`;
  }
}
