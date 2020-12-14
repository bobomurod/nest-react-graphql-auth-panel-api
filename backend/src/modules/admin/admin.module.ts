import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';
import { AdminRepository } from './services/admin.repository';

@Module({
  providers: [AdminService, AdminRepository],
  exports: [AdminRepository],
})
export class AdminModule {}
