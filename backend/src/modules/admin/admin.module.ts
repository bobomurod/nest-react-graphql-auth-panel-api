import { Module } from '@nestjs/common';
import { AdminService } from './services/admin.service';

@Module({
  providers: [AdminService]
})
export class AdminModule {}
