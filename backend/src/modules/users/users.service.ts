import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return;
  }

  async getUserById(id: string): Promise<User> {
    return;
  }

  async getAllUsers(): Promise<User> {
    return;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return;
  }

  async removeUser(id: string): Promise<boolean> {
    return;
  }
}
