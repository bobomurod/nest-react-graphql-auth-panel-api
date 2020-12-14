import { Injectable } from '@nestjs/common';
import { Admin } from '../model/admin';

@Injectable()
export class AdminRepository {
  async findOne(): Promise<Admin | undefined> {
    return null;
  }
}
