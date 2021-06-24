import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { GenerateTwoFactorAuthenticationDto } from './dto/create-two-factor-authentication.dto';

@Controller('2fa')
export class TwoFactorAuthenticationController {
  constructor(private readonly twoFactorAuthenticationService: TwoFactorAuthenticationService) {}

  @Post('generate')
  create(@Body() createTwoFactorAuthenticationDto: GenerateTwoFactorAuthenticationDto) {
    return this.twoFactorAuthenticationService.create(createTwoFactorAuthenticationDto);
  }

  @Get('verify/:id/:code')
  findOne(@Param('id') id: string, @Param('code') code: string) {
    return this.twoFactorAuthenticationService.findOne(+id);
  }

}
