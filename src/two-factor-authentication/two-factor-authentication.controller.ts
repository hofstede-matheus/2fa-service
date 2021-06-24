import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { GenerateTwoFactorAuthenticationDto } from './dto/generate-two-factor-authentication.dto';

@Controller('2fa')
export class TwoFactorAuthenticationController {
  constructor(private readonly twoFactorAuthenticationService: TwoFactorAuthenticationService) {}

  @Post('generate')
  create(@Body() createTwoFactorAuthenticationDto: GenerateTwoFactorAuthenticationDto) {
    return this.twoFactorAuthenticationService.generate(createTwoFactorAuthenticationDto);
  }

  @Get('verify/:id/:code')
  findOne(@Param('id') id: string, @Param('code') code: string) {
    return this.twoFactorAuthenticationService.verify(id, code);
  }

}
