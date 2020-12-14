import { Injectable } from '@nestjs/common';
import { Admin } from '../model/admin';

@Injectable()
export class AdminRepository {
    private readonly admins: Admin;
  async findOne(): Promise<Admin | undefined> {
    return null;
  }
}
