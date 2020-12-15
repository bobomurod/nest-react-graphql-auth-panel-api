import { Body, Controller, Get } from '@nestjs/common';
import { Admin } from '../admin/model/admin';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly adminRepository: Admin,
    private readonly authService: AuthService,
  ) {}

  @Get()
  dashboard(@Body() loginInformation: Admin) {
    return this.authService.validateAdmin(
      loginInformation.login,
      loginInformation.password,
    );
  }
}
