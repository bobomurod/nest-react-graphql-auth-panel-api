import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { AdminRepository } from './services/admin.repository';
import { Admin } from './model/admin';

@Module({
  providers: [AdminRepository, Admin],
  exports: [AdminRepository, Admin],
})
export class AdminModule {}
