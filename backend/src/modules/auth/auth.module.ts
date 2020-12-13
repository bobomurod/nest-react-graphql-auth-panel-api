import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminService } from '../admin/services/admin.service';

@Module({
  imports: [AdminService],
  providers: [AuthService],
})
export class AuthModule {}
