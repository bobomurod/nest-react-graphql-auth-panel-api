import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  async create(): Promise<User> {
    return;
  }

  async getUserById(): Promise<User> {
    return;
  }

  async getAllUsers(): Promise<User> {
    return;
  }

  async updateUser(): Promise<User> {
    return;
  }

  async removeUser(): Promise<boolean> {
    return;
  }
}
