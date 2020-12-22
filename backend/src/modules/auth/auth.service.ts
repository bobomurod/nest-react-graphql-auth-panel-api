import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.service';
import { UserLoginDto } from '../users/dto/user-login.dto';
import { UserJwtPayloadDto } from '../users/dto/user-jwt-payload.dto';
import { UserJwtResponseDto } from '../users/dto/user-jwt-response.dto';
import { UserRegistrationDto } from '../users/dto/user-registration.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
  ) {}

  async login(data: UserLoginDto): Promise<UserJwtResponseDto> {
    if (!data.username && !data.login && !data.phone) {
      throw new BadRequestException('Invalid authentication data');
    }
    if (!data.password) {
      throw new BadRequestException('Password not provided');
    }
    const _userWhere = data;
    delete _userWhere.password;
    const _user = await this._userService
      .getSingle(_userWhere)
      .then((user) => user)
      .catch(() => {
        throw new UnauthorizedException('Invalid username or password');
      });
    const payload: UserJwtPayloadDto = { user: _user.username, sub: _user._id };
    return { ...payload, ...{ accessToken: this._jwtService.sign(payload) } };
  }

  async registration(data: UserRegistrationDto): Promise<UserJwtResponseDto> {
    if (!data.username || !data.login || !data.phone || !data.password) {
      throw new BadRequestException('Invalid registration data');
    }
    const _hashedPassword: string = await bcrypt.hash(data.password, 10);
    try {
      const _user = await this._userService
        .createSingle({ ...data, password: _hashedPassword })
        .then((user) => user)
        .catch(() => {
          throw new UnauthorizedException(
            'Unable to registration, please try later again or check data ',
          );
        });
      const payload: UserJwtPayloadDto = {
        user: _user.username,
        sub: _user._id,
      };
      return { ...payload, ...{ accessToken: this._jwtService.sign(payload) } };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async validateUser(login: string, pass: string): Promise<any> {
    // const user = await this._userService.findOne(login);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return true;
  }
}
