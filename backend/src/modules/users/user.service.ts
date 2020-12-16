import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) {}

  // users = [
  //   {
  //     username: 'bamborra',
  //     password: 'secret',
  //   },
  //   {
  //     username: 'barracuda',
  //     password: 'secret',
  //   },
  //   {
  //     username: 'bam',
  //     password: 'secret',
  //   },
  // ];

  @Post()
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const createUser: UserDocument = new this.userModel(createUserDto);
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

  async findOne(login) {
    return this.userModel.findOne({ username: login });
  }
}
