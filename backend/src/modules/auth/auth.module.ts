import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AdminModule } from '../admin/admin.module';
import { AuthController } from './auth.controller';
import { AdminRepository } from '../admin/services/admin.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AdminModule,
    PassportModule,
    AdminRepository,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
