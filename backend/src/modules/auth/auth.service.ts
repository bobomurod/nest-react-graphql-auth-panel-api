import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../admin/services/admin.repository';
import { Admin } from '../admin/model/admin';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminRepository) {}

  async validateAdmin(login: string, pass: string): Promise<any> {
    const user: Admin = await this.adminService.findByLogin(login);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
