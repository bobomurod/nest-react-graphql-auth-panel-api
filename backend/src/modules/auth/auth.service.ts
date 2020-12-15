import { AdminRepository } from '../admin/services/admin.repository';
import { Admin } from '../admin/model/admin';
import { JwtService } from '@nestjs/jwt';
import {Injectable} from "@nestjs/common";

export class AuthService {
  constructor(
    private adminService: AdminRepository,
    private jwtService: JwtService,
  ) {}

  async login(user: Admin): Promise<any> {
    console.log(user)
    const payload = { user: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateAdmin(login: string, pass: string): Promise<any> {
    console.log('validateAdmin')
    const user: Admin = await this.adminService.findByLogin(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
