import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { UserRegistrationDto } from '../users/dto/user-registration.dto';
import { UserJwtResponseDto } from '../users/dto/user-jwt-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('login')
  async login(@Body() body: UserLoginDto): Promise<UserJwtResponseDto> {
    return this._authService.login(body);
    // return true;
  }

  @Post('registration')
  async registration(@Body() body: UserRegistrationDto): Promise<UserJwtResponseDto> {
    return this._authService.registration(body);
  }
}
