import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwoFactorAuthenticationService } from './two-factor-authentication.service';
import { CreateTwoFactorAuthenticationDto } from './dto/create-two-factor-authentication.dto';
import { UpdateTwoFactorAuthenticationDto } from './dto/update-two-factor-authentication.dto';

@Controller('two-factor-authentication')
export class TwoFactorAuthenticationController {
  constructor(private readonly twoFactorAuthenticationService: TwoFactorAuthenticationService) {}

  @Post()
  create(@Body() createTwoFactorAuthenticationDto: CreateTwoFactorAuthenticationDto) {
    return this.twoFactorAuthenticationService.create(createTwoFactorAuthenticationDto);
  }

  @Get()
  findAll() {
    return this.twoFactorAuthenticationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twoFactorAuthenticationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTwoFactorAuthenticationDto: UpdateTwoFactorAuthenticationDto) {
    return this.twoFactorAuthenticationService.update(+id, updateTwoFactorAuthenticationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twoFactorAuthenticationService.remove(+id);
  }
}
