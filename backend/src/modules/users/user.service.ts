import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserCollection } from './schemas/user.schema';
import { UserWhereDto } from './dto/user-where.dto';
import { UserDto } from './dto/user.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserCollection.name)
    private readonly _userModel: Model<UserCollection>,
  ) {}

  async createSingle(data: UserCreateDto): Promise<UserDto> {
    const _insertObject = new this._userModel(data);
    return await _insertObject
      .save()
      .then((user) => user.toObject())
      .catch((error) => {
        throw new InternalServerErrorException();
      });
  }
  async updateSingle(userId: string, data: UserUpdateDto): Promise<UserDto> {
    await this._userModel
      .findById(userId)
      .exec()
      .then((user) => {
        if (!user) {
          throw new NotFoundException();
        }
      })
      .catch((error) => {
        if (error instanceof NotFoundException) {
          throw new NotFoundException('User for update not found');
        }
        throw new InternalServerErrorException();
      });
    return await this._userModel
      .findByIdAndUpdate(userId, data, { new: true })
      .exec()
      .then((user) => user.toObject())
      .catch((error) => {
        throw new InternalServerErrorException();
      });
  }
  async getSingle(where: UserWhereDto): Promise<UserDto> {
    return await this._userModel
      .findOne(where)
      .exec()
      .then((user) => {
        if (!user) {
          throw new NotFoundException();
        }
        return user.toObject();
      })
      .catch((error) => {
        if (error instanceof NotFoundException) {
          throw new NotFoundException('User for update not found');
        }
        throw new InternalServerErrorException();
      });
  }
  async getMany(where: UserWhereDto): Promise<UserDto[]> {
    return await this._userModel
      .find(where)
      .exec()
      .then((users) => {
        if (!users.length) {
          throw new NotFoundException();
        }
        return users.map((user) => user.toObject());
      })
      .catch((error) => {
        if (error instanceof NotFoundException) {
          throw new NotFoundException('Users not found');
        }
        throw new InternalServerErrorException();
      });
  }
  async deleteSingle(where: UserWhereDto): Promise<UserDto> {
    return await this._userModel
      .findOneAndRemove(where)
      .exec()
      .then((user) => {
        if (!user) {
          throw new NotFoundException();
        }
        return user.toObject();
      })
      .catch((error) => {
        if (error instanceof NotFoundException) {
          throw new NotFoundException('User for delete not found');
        }
        throw new InternalServerErrorException();
      });
  }
  //
  // // users = [
  // //   {
  // //     username: 'bamborra',
  // //     password: 'secret',
  // //   },
  // //   {
  // //     username: 'barracuda',
  // //     password: 'secret',
  // //   },
  // //   {
  // //     username: 'bam',
  // //     password: 'secret',
  // //   },
  // // ];
  //
  // async createUser(createUserDto: CreateUserDto): Promise<any> {
  //   // const createUser: UserDocument = new this.userModel(createUserDto);
  // }
  //
  // async getUserById(id: string): Promise<UserCollection> {
  //   return;
  // }
  //
  // async getAllUsers(where: UserWhereDto): Promise<UserDto[]> {
  //   return await this._userModel
  //     .find(where)
  //     .exec()
  //     .then((users) => {
  //       if (!users.length) {
  //         throw new NotFoundException('Users not found');
  //       }
  //       return users.map((user) => user.toObject());
  //     })
  //     .catch((error) => {
  //       throw new InternalServerErrorException(error);
  //     });
  // }
  //
  // async updateUser(
  //   id: string,
  //   updateUserDto: UpdateUserDto,
  // ): Promise<UserCollection> {
  //   return;
  // }
  //
  // async removeUser(id: string): Promise<boolean> {
  //   return;
  // }
  //
  // async findOne(login) {
  //   return this._userModel.findOne({ username: login });
  // }
}
