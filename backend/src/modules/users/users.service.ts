import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  @Post()
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return;
  }

  @Get()
  async getUserById(id: string): Promise<User> {
    return;
  }

  @Get()
  async getAllUsers(): Promise<User> {
    return;
  }

  @Put()
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return;
  }

  @Delete()
  async removeUser(id: string): Promise<boolean> {
    return;
  }
}
